/**
 * Host-level rules. Runs before every request, static assets included.
 *
 * Both rules below are about the same problem: the site answers on more than
 * one hostname, and a search engine that finds the same page under three
 * hostnames has to guess which one is the real site.
 *
 *   1. www.exclamationdev.com → exclamationdev.com, 301
 *   2. any *.pages.dev host   → X-Robots-Tag: noindex, nofollow
 *
 * WHY THIS IS NOT IN `_redirects`
 * ------------------------------------------------------------------
 * `public/_redirects` carries a `https://www.exclamationdev.com/*` rule and it
 * does nothing: Cloudflare Pages matches `_redirects` on the path only, so a
 * source with a hostname in it never matches anything. Checked against the
 * live site on 2026-08-14 — `curl -I https://www.exclamationdev.com/` returned
 * `200`, serving a full duplicate of the site, not a redirect. The canonical
 * tag pointed at the apex, which is what kept it from being a real ranking
 * split, but a canonical is a hint and a 301 is not.
 *
 * The `.pages.dev` alias is the same duplicate one layer out. Cloudflare gives
 * every Pages project a permanent `<project>.pages.dev` and serves the
 * production build there with no way to switch it off; `exclamation.pages.dev`
 * answered `200` with the whole site. `X-Robots-Tag` is the only signal that
 * works here, because robots.txt cannot vary by host on a static deployment
 * and the HTML is byte-identical across hostnames.
 *
 * Deliberately a header and not a redirect: the alias is what Cloudflare's own
 * build previews and the deploy log link to, so it has to keep working for us
 * while staying out of the index.
 */

const CANONICAL_HOST = 'exclamationdev.com';

export const onRequest: PagesFunction = async ({ request, next }) => {
  const url = new URL(request.url);

  // 1. www → apex, preserving path and query. 301: this is permanent.
  if (url.hostname === `www.${CANONICAL_HOST}`) {
    url.hostname = CANONICAL_HOST;
    return Response.redirect(url.toString(), 301);
  }

  const response = await next();

  // 2. Keep the preview alias out of the index. Cloned because the response
  // from next() has immutable headers when it comes from the asset server.
  if (url.hostname.endsWith('.pages.dev')) {
    const headers = new Headers(response.headers);
    headers.set('X-Robots-Tag', 'noindex, nofollow');
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  }

  return response;
};
