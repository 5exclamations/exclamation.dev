/**
 * POST /api/brief — the only server-side code on the site.
 *
 * The form used to post straight to Formspree, which meant the endpoint id sat
 * in the HTML of all 45 pages and the only spam defence was a honeypot a
 * headless browser fills in correctly. Now the form posts here, and this
 * function is what talks to Formspree:
 *
 *   1. honeypot  — `_gotcha` filled means a bot; answer as if it worked
 *   2. Turnstile — verified against siteverify with the secret key, which
 *                  never reaches the browser
 *   3. forward   — to Formspree, with the id read from the environment
 *
 * Both checks are kept. Turnstile catches what the honeypot misses, the
 * honeypot costs nothing and catches the trivial case before a network call.
 *
 * Progressive enhancement, unchanged: with JavaScript the form sends this a
 * `fetch` with `Accept: application/json` and renders the status inline; with
 * JavaScript off the browser posts natively and this answers 303 back to the
 * page's own `#…-sent` / `#…-error` anchor, which the CSS reveals with
 * `:target`. No JS is required for a working submission at any point.
 */

interface Env {
  /** Turnstile secret. Unset (local, previews) skips verification. */
  TURNSTILE_SECRET_KEY?: string;
  /** the part after /f/ in the Formspree endpoint */
  FORMSPREE_ID?: string;
}

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

/** fields that are ours and must not be forwarded to Formspree */
const INTERNAL = new Set(['cf-turnstile-response', '_gotcha', '_return']);

/**
 * Where to send a no-JS browser back to. Same-origin, path-only, and rebuilt
 * from our own origin rather than echoed — a `_return` of `//evil.example`
 * would otherwise be an open redirect.
 */
function backTo(request: Request, form: FormData, suffix: string): string {
  const raw = String(form.get('_return') ?? '/');
  const safe = raw.startsWith('/') && !raw.startsWith('//') ? raw : '/';
  const url = new URL(safe, request.url);
  url.hash = '';
  return `${url.origin}${url.pathname}${suffix}`;
}

const jsonWanted = (request: Request) =>
  (request.headers.get('accept') ?? '').includes('application/json');

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return new Response('bad request', { status: 400 });
  }

  const ok = () =>
    jsonWanted(request)
      ? Response.json({ ok: true })
      : Response.redirect(backTo(request, form, '#brief-sent'), 303);

  const fail = (status: number, error: string) =>
    jsonWanted(request)
      ? Response.json({ ok: false, error }, { status })
      : Response.redirect(backTo(request, form, '#brief-error'), 303);

  // 1. honeypot — answer 200 so a bot has nothing to learn from the response
  if (String(form.get('_gotcha') ?? '').trim() !== '') return ok();

  // 2. Turnstile
  if (env.TURNSTILE_SECRET_KEY) {
    const token = String(form.get('cf-turnstile-response') ?? '');
    if (!token) return fail(400, 'turnstile-missing');

    const body = new FormData();
    body.append('secret', env.TURNSTILE_SECRET_KEY);
    body.append('response', token);
    const ip = request.headers.get('CF-Connecting-IP');
    if (ip) body.append('remoteip', ip);

    try {
      const verify = await fetch(VERIFY_URL, { method: 'POST', body });
      const result = (await verify.json()) as { success?: boolean };
      if (!result.success) return fail(403, 'turnstile-failed');
    } catch {
      // Cloudflare unreachable from Cloudflare is not the visitor's problem,
      // and silently dropping a real enquiry is worse than admitting one bot.
      console.error('[brief] turnstile verification unreachable, allowing');
    }
  }

  // 3. forward
  if (!env.FORMSPREE_ID) {
    console.error('[brief] FORMSPREE_ID is not set — nothing was sent');
    return fail(500, 'not-configured');
  }

  const outgoing = new FormData();
  for (const [key, value] of form.entries()) {
    if (!INTERNAL.has(key)) outgoing.append(key, value);
  }

  try {
    const res = await fetch(`https://formspree.io/f/${env.FORMSPREE_ID}`, {
      method: 'POST',
      body: outgoing,
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return fail(502, 'upstream');
  } catch {
    return fail(502, 'upstream');
  }

  return ok();
};

/**
 * Anything but POST is a mistake worth naming. Declared as its own method
 * handler rather than as `onRequest`: a module that exports `onRequest`
 * handles every method itself, and `next()` from there continues to the next
 * middleware instead of reaching `onRequestPost` above.
 */
const notAllowed = () =>
  new Response('method not allowed', { status: 405, headers: { Allow: 'POST' } });

export const onRequestGet: PagesFunction<Env> = notAllowed;
export const onRequestPut: PagesFunction<Env> = notAllowed;
export const onRequestPatch: PagesFunction<Env> = notAllowed;
export const onRequestDelete: PagesFunction<Env> = notAllowed;
