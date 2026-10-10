import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
await mkdir('refs/crops', { recursive: true });
const b = await chromium.launch();
for (const w of [320, 390]) {
  const ctx = await b.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: 2 });
  const p = await ctx.newPage();
  await p.goto('http://localhost:4321/ru/is/drvusalagasimova/', { waitUntil: 'networkidle' });
  await p.evaluate(() => document.querySelectorAll('[data-reveal]').forEach(e => e.classList.add('is-in')));
  const figs = await p.$$('.gallery figure');
  for (let i = 0; i < figs.length; i++) {
    await figs[i].scrollIntoViewIfNeeded();
    await p.waitForTimeout(500);
    await p.waitForFunction((n) => {
      const im = document.querySelectorAll('.gallery figure img')[n];
      return im && im.complete && im.naturalWidth > 0;
    }, i, { timeout: 15000 });
    await p.waitForTimeout(400);
    await figs[i].screenshot({ path: `refs/crops/${w}-${i + 1}.png` });
  }
  console.log(w, 'ok');
  await ctx.close();
}
await b.close();
