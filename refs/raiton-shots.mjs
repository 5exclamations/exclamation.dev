import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const shots = [
  { file: 'screen1', url: 'https://raitonllc.com/', top: 0 },
  { file: 'screen2', url: 'https://raitonllc.com/offshore-crude-oil-trading', top: 0 },
  { file: 'screen3', url: 'https://raitonllc.com/tr/contact', top: 0 },
];

await mkdir('refs/raiton-case', { recursive: true });
const b = await chromium.launch();
// 1600x1280, DPR 1 — the size every other case screenshot in src/assets is
const ctx = await b.newContext({ viewport: { width: 1600, height: 1280 }, deviceScaleFactor: 1 });
const p = await ctx.newPage();

for (const s of shots) {
  const res = await p.goto(s.url, { waitUntil: 'networkidle', timeout: 60000 });
  await p.waitForTimeout(3000);
  console.log(s.url, '->', res.status(), '|', await p.title());
  await p.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), s.top);
  await p.waitForTimeout(1200);
  await p.screenshot({ path: `refs/raiton-case/${s.file}.png` });
}
await b.close();
