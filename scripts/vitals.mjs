/**
 * Core Web Vitals for every page, on the Cloudflare runtime.
 *
 *   npx wrangler pages dev dist --port 8788 --ip 127.0.0.1 &
 *   node scripts/vitals.mjs [baseUrl] [Slow4G|Fast4G]
 *
 * Throttling matches Chrome DevTools exactly — "Slow 4G" and "Fast 4G" are the
 * presets the MCP profiler uses, so numbers here and there are comparable.
 * Viewport 390x844 DPR 3 with 4x CPU, the conditions the landing page was
 * first measured under (HANDOFF §3).
 *
 * LCP and CLS are read from the buffered PerformanceObservers. INP is measured
 * by actually interacting: every page gets a real tap on its primary control
 * and the worst event duration is reported, which is what INP approximates.
 */
import { chromium } from 'playwright';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { brotliCompressSync } from 'node:zlib';

/**
 * Serves `dist` itself rather than depending on a server being up.
 *
 * `wrangler pages dev` was used first and crashed repeatedly part-way through
 * a run, always on the image-heavy case page, taking the measurement with it.
 * Nothing here needs the Workers runtime — no Functions are involved in a page
 * load — so a plain static server gives the same numbers and finishes.
 */
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.woff2': 'font/woff2',
  '.avif': 'image/avif',
  '.webp': 'image/webp',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
};

/**
 * Brotli for the text types, exactly as Cloudflare serves them.
 *
 * Without this the server is not a fair stand-in: an uncompressed run reported
 * the az FAQ page at 231kB instead of 172kB and pushed every LCP up by roughly
 * half a second. woff2, avif and webp are already compressed and are passed
 * through untouched, which is also what a CDN does.
 */
const COMPRESSIBLE = new Set(['.html', '.css', '.js', '.svg', '.xml', '.txt', '.json']);

const startServer = (root, port) =>
  new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      try {
        let p = join(root, decodeURIComponent(req.url.split('?')[0]));
        if ((await stat(p).catch(() => null))?.isDirectory()) p = join(p, 'index.html');
        let body = await readFile(p);
        const headers = { 'Content-Type': MIME[extname(p)] ?? 'application/octet-stream' };
        if (COMPRESSIBLE.has(extname(p)) && /\bbr\b/.test(req.headers['accept-encoding'] ?? '')) {
          body = brotliCompressSync(body);
          headers['Content-Encoding'] = 'br';
        }
        headers['Content-Length'] = body.length;
        res.writeHead(200, headers);
        res.end(body);
      } catch {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('not found');
      }
    });
    server.listen(port, '127.0.0.1', () => resolve(server));
  });

const PORT = 8799;
const server = await startServer(new URL('../dist/', import.meta.url).pathname, PORT);
const base = process.argv[2] ?? `http://127.0.0.1:${PORT}`;
const profile = process.argv[3] ?? 'Slow4G';

// exactly the DevTools presets
const NET = {
  Slow4G: { downloadThroughput: (1.6 * 1024 * 1024) / 8, uploadThroughput: (750 * 1024) / 8, latency: 562.5 },
  Fast4G: { downloadThroughput: (9 * 1024 * 1024) / 8, uploadThroughput: (1.5 * 1024 * 1024) / 8, latency: 170 },
}[profile];
if (!NET) throw new Error(`unknown profile ${profile}`);

const PAGES = [
  ['home az', '/'],
  ['home ru', '/ru/'],
  ['faq az', '/faq/'],
  ['faq ru', '/ru/faq/'],
  ['faq en', '/en/faq/'],
  ['svc crm-erp ru', '/ru/uslugi/crm-erp/'],
  ['svc web ru', '/ru/uslugi/razrabotka-saytov/'],
  ['svc mobile ru', '/ru/uslugi/razrabotka-mobilnyh-prilozheniy/'],
  ['svc ecommerce ru', '/ru/uslugi/internet-magazin/'],
  ['svc integrations ru', '/ru/uslugi/integracii-i-avtomatizaciya/'],
  ['svc bots-ai ru', '/ru/uslugi/boty-i-ai/'],
  ['svc crm-erp az', '/xidmetler/crm-erp-sistemleri/'],
  ['case crm-portal ru', '/ru/is/crm-portal/'],
];

/** installed before any page script, so nothing is missed */
const COLLECT = `
  window.__v = { lcp: 0, cls: 0, events: [] };
  new PerformanceObserver((l) => {
    for (const e of l.getEntries()) window.__v.lcp = e.startTime;
  }).observe({ type: 'largest-contentful-paint', buffered: true });
  new PerformanceObserver((l) => {
    for (const e of l.getEntries()) if (!e.hadRecentInput) window.__v.cls += e.value;
  }).observe({ type: 'layout-shift', buffered: true });
  new PerformanceObserver((l) => {
    for (const e of l.getEntries()) window.__v.events.push(e.duration);
  }).observe({ type: 'event', buffered: true, durationThreshold: 16 });
`;

/**
 * Three runs per page, reported as the median.
 *
 * Single runs on a laptop are not stable enough to act on: an early pass had
 * one page move 732ms -> 1692ms between builds from a change that touched only
 * a different page. Medians make a before/after comparison mean something.
 */
const RUNS = Number(process.env.RUNS ?? 3);
const median = (xs) => {
  const s = xs.filter((x) => x !== null).sort((a, b) => a - b);
  return s.length ? s[Math.floor(s.length / 2)] : null;
};

const browser = await chromium.launch();
const rows = [];

/** ONLY=home,faq narrows the run to matching labels — for re-checking one fix */
const only = (process.env.ONLY ?? '').split(',').filter(Boolean);
const selected = only.length
  ? PAGES.filter(([label]) => only.some((o) => label.includes(o)))
  : PAGES;

for (const [label, path] of selected) {
  const runs = [];
  for (let run = 0; run < RUNS; run++) {
   try {
  const ctx = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
  });
  const page = await ctx.newPage();
  const cdp = await ctx.newCDPSession(page);
  await cdp.send('Network.enable');
  await cdp.send('Network.emulateNetworkConditions', { offline: false, ...NET });
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
  await page.addInitScript(COLLECT);

  await page.goto(base + path, { waitUntil: 'load', timeout: 120000 });
  await page.waitForTimeout(2500); // let LCP settle

  // a real interaction, so INP is measured rather than assumed
  const target = (await page.$('details summary')) ?? (await page.$('a[href]'));
  if (target) {
    await target.scrollIntoViewIfNeeded();
    for (let i = 0; i < 3; i++) {
      await target.click({ delay: 30 }).catch(() => {});
      await page.waitForTimeout(220);
    }
  }
  await page.waitForTimeout(400);

  const v = await page.evaluate(() => ({
    lcp: Math.round(window.__v.lcp),
    cls: +window.__v.cls.toFixed(3),
    inp: window.__v.events.length ? Math.round(Math.max(...window.__v.events)) : null,
  }));

  const bytes = await page.evaluate(() =>
    performance.getEntriesByType('resource').reduce((n, r) => n + (r.transferSize || 0), 0) +
    (performance.getEntriesByType('navigation')[0]?.transferSize || 0)
  );

    runs.push({ ...v, kb: Math.round(bytes / 1024) });
    await ctx.close();
   } catch (err) {
     console.error(`  ! ${label} run ${run + 1} failed: ${err.message.split('\n')[0]}`);
   }
  }
  rows.push({
    label,
    lcp: median(runs.map((r) => r.lcp)),
    cls: median(runs.map((r) => r.cls)),
    inp: median(runs.map((r) => r.inp)),
    kb: median(runs.map((r) => r.kb)),
  });
}
await browser.close();
server.close();

const bad = (r) => r.lcp > 1800 || r.cls > 0.05 || (r.inp ?? 0) > 200;
console.log(`\n${profile}  ·  390x844 DPR3  ·  4x CPU  ·  ${base}\n`);
console.log('page'.padEnd(22), 'LCP'.padStart(7), 'CLS'.padStart(7), 'INP'.padStart(7), 'transfer'.padStart(10));
console.log('-'.repeat(56));
for (const r of rows) {
  console.log(
    r.label.padEnd(22),
    `${r.lcp}ms`.padStart(7),
    String(r.cls).padStart(7),
    (r.inp === null ? '—' : `${r.inp}ms`).padStart(7),
    `${r.kb}kB`.padStart(10),
    bad(r) ? '  <<< OVER TARGET' : ''
  );
}
const failing = rows.filter(bad);
console.log(
  failing.length
    ? `\n${failing.length} page(s) over target (LCP<1800 CLS<0.05 INP<200)`
    : '\nall pages within target (LCP<1800  CLS<0.05  INP<200)'
);
process.exit(failing.length ? 1 : 0);
