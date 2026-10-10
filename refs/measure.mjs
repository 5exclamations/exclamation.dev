import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [320, 390, 600]) {
  const ctx = await b.newContext({ viewport: { width: w, height: 900 } });
  const p = await ctx.newPage();
  await p.goto('http://localhost:4321/ru/is/raiton-llc-fz/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(600);
  const r = await p.evaluate(() => {
    const f = document.querySelector('.gallery .frame');
    const b = f.getBoundingClientRect();
    const img = f.querySelector('img');
    const ib = img.getBoundingClientRect();
    return { frameW: Math.round(b.width), frameH: Math.round(b.height), imgW: Math.round(ib.width), natural: img.naturalWidth + 'x' + img.naturalHeight };
  });
  console.log(w, JSON.stringify(r));
  await ctx.close();
}
await b.close();
