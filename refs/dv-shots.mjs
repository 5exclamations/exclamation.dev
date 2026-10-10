import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
await mkdir('refs/dv-case', { recursive: true });

const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1600, height: 1280 }, deviceScaleFactor: 1 });
const p = await ctx.newPage();

// 1 — home: hero and the approach block below it
await p.goto('https://drvusalagasimova.com/', { waitUntil: 'networkidle', timeout: 60000 });
await p.waitForTimeout(2500);
console.log('home:', await p.title());
await p.screenshot({ path: 'refs/dv-case/home-top.png' });
await p.evaluate(() => window.scrollTo({ top: 700, behavior: 'instant' }));
await p.waitForTimeout(1200);
await p.screenshot({ path: 'refs/dv-case/home-approach.png' });

// 2 — the method page
await p.goto('https://drvusalagasimova.com/bac-therapy.html', { waitUntil: 'networkidle', timeout: 60000 });
await p.waitForTimeout(2500);
console.log('bac:', await p.title());
await p.screenshot({ path: 'refs/dv-case/bac-top.png' });
await p.evaluate(() => window.scrollTo({ top: 900, behavior: 'instant' }));
await p.waitForTimeout(1200);
await p.screenshot({ path: 'refs/dv-case/bac-mid.png' });

// 3 — what can open the booking modal
await p.goto('https://drvusalagasimova.com/', { waitUntil: 'networkidle', timeout: 60000 });
await p.waitForTimeout(2000);
const buttons = await p.evaluate(() =>
  [...document.querySelectorAll('button, a')]
    .map((e) => ({ tag: e.tagName, text: (e.textContent || '').trim().slice(0, 40), cls: String(e.className).slice(0, 50), href: e.getAttribute('href') }))
    .filter((e) => e.text)
    .slice(0, 40)
);
console.log(JSON.stringify(buttons, null, 1));
await b.close();
