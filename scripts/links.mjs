/**
 * Broken-link check over the built site.
 *
 *   npm run build && node scripts/links.mjs
 *
 * Checks every internal href and src in dist against what was actually built:
 * the page exists, the asset exists, and a `#fragment` names an id that is
 * really on the target page. External links are listed but not fetched — a
 * third party being briefly down should not fail this repo's CI.
 *
 * No dependencies and no browser: it reads the emitted HTML. That makes it
 * fast enough to run on every push and impossible to make flaky.
 */
import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative, dirname, resolve } from 'node:path';

const DIST = new URL('../dist/', import.meta.url).pathname;

const walk = async (dir) => {
  const out = [];
  for (const name of await readdir(dir)) {
    const p = join(dir, name);
    const s = await stat(p);
    if (s.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
};

const exists = async (p) => Boolean(await stat(p).catch(() => null));

const files = await walk(DIST);
const pages = files.filter((f) => f.endsWith('.html'));

/** every id present on each built page, for fragment checking */
const idsByPage = new Map();
for (const page of pages) {
  const html = await readFile(page, 'utf8');
  idsByPage.set(page, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
}

/**
 * Resolve a site-absolute or relative URL to the file that would serve it.
 * `/faq/` -> dist/faq/index.html, `/robots.txt` -> dist/robots.txt.
 */
const targetFor = (href, fromPage) => {
  const path = href.split('#')[0].split('?')[0];
  if (path === '') return fromPage; // pure fragment: same page
  const base = path.startsWith('/') ? DIST : dirname(fromPage) + '/';
  const abs = resolve(base, path.startsWith('/') ? '.' + path : path);
  return abs.endsWith('/') ? join(abs, 'index.html') : abs;
};

const problems = [];
let checked = 0;
let external = 0;

for (const page of pages) {
  const html = await readFile(page, 'utf8');
  const where = relative(DIST, page);

  const refs = [
    ...[...html.matchAll(/\shref="([^"]+)"/g)].map((m) => m[1]),
    ...[...html.matchAll(/\ssrc="([^"]+)"/g)].map((m) => m[1]),
  ];

  for (const raw of refs) {
    const href = raw.replace(/&amp;/g, '&').trim();
    if (!href) continue;
    if (/^(https?:)?\/\//i.test(href) || /^(mailto|tel|data|javascript):/i.test(href)) {
      external++;
      continue;
    }
    checked++;

    const file = targetFor(href, page);
    let ok = await exists(file);

    // a path with no trailing slash may still be a directory index
    if (!ok && !file.endsWith('.html')) ok = await exists(join(file, 'index.html'));

    /**
     * `/404/` is emitted as `404.html`, not `404/index.html` — Astro special
     * cases the root error page, and the localised ones are copied to the
     * same shape by the astro:build:done hook for Cloudflare's error lookup.
     * The language switcher on a 404 page links to `/404/`, and Cloudflare
     * answers it by walking up to that exact file, so the destination is real
     * even though the directory is not.
     */
    if (!ok && /\/404(\/index\.html)?$/.test(file)) {
      ok = await exists(file.replace(/\/404(\/index\.html)?$/, '/404.html'));
    }

    if (!ok) {
      problems.push(`${where}  ->  ${href}   (no such file: ${relative(DIST, file)})`);
      continue;
    }

    const frag = href.includes('#') ? href.split('#')[1] : '';
    if (frag) {
      const targetPage = file.endsWith('.html') ? file : join(file, 'index.html');
      const ids = idsByPage.get(targetPage);
      // ids is undefined for non-HTML targets, which cannot carry a fragment
      if (ids && !ids.has(frag)) {
        problems.push(`${where}  ->  ${href}   (no #${frag} on that page)`);
      }
    }
  }
}

console.log(
  `${pages.length} pages, ${checked} internal refs checked, ${external} external skipped`
);
if (problems.length) {
  console.error(`\n${problems.length} broken:`);
  for (const p of problems) console.error('  ' + p);
  process.exit(1);
}
console.log('no broken internal links');
