/**
 * Screenshot + sanity harness for a section pass.
 *
 *   node scripts/shots.mjs <label> [selector] [path]
 *
 * Captures six widths in both themes, and on every width checks for
 * horizontal overflow, sub-4.5:1 text, and tap targets under 44px.
 * Screenshots land in .shots/<label>/.
 */
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const [, , label = 'pass', selector = null, path = '/'] = process.argv;
const base = process.env.BASE_URL ?? 'http://localhost:4321';
const outDir = new URL(`../.shots/${label}/`, import.meta.url).pathname;
await mkdir(outDir, { recursive: true });

const WIDTHS = [320, 390, 768, 1024, 1440, 1920];
const THEMES = ['light', 'dark'];

const audit = () => {
  const parse = (c) => {
    const n = c.match(/-?\d*\.?\d+(e-?\d+)?/g).map(Number);
    return c.startsWith('color(') ? n.slice(0, 3) : n.slice(0, 3).map((v) => v / 255);
  };
  const lum = (c) => {
    const [r, g, b] = parse(c).map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const ratio = (a, b) => {
    const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
    return (hi + 0.05) / (lo + 0.05);
  };
  const bgOf = (el) => {
    let node = el;
    while (node && node !== document.documentElement) {
      const bg = getComputedStyle(node).backgroundColor;
      if (bg && !bg.includes('rgba(0, 0, 0, 0)') && bg !== 'transparent') return bg;
      node = node.parentElement;
    }
    return getComputedStyle(document.body).backgroundColor;
  };

  // an element wider than the viewport only matters if nothing clips it
  const clipped = (el) => {
    for (let n = el.parentElement; n && n !== document.body; n = n.parentElement) {
      if (getComputedStyle(n).overflow !== 'visible') return true;
    }
    return false;
  };
  const overflow = [...document.querySelectorAll('body *')]
    .filter((el) => el.getBoundingClientRect().right > document.documentElement.clientWidth + 1)
    .filter((el) => !clipped(el))
    .map((el) => `${el.tagName}.${el.className}`.slice(0, 60));

  const lowContrast = [];
  for (const el of document.querySelectorAll('p,h1,h2,h3,h4,li,a,span,dt,dd,figcaption,button,label')) {
    if (!el.textContent?.trim() || el.children.length > 0) continue;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none' || +cs.opacity === 0) continue;
    const r = ratio(cs.color, bgOf(el));
    if (r < 4.5) lowContrast.push(`${el.tagName}.${el.className} ${r.toFixed(2)} "${el.textContent.trim().slice(0, 24)}"`);
  }

  const smallTargets = [...document.querySelectorAll('a[href],button')]
    .filter((el) => el.offsetParent !== null)
    .map((el) => ({ el, r: el.getBoundingClientRect() }))
    .filter(({ r }) => r.width > 0 && (r.width < 44 || r.height < 44))
    .map(({ el, r }) => `${el.tagName}.${el.className} ${Math.round(r.width)}x${Math.round(r.height)}`.slice(0, 70));

  return {
    scrollW: document.body.scrollWidth,
    clientW: document.documentElement.clientWidth,
    overflow: [...new Set(overflow)].slice(0, 6),
    lowContrast: [...new Set(lowContrast)].slice(0, 8),
    smallTargets: [...new Set(smallTargets)].slice(0, 6),
  };
};

const browser = await chromium.launch();
let failures = 0;

for (const colorScheme of THEMES) {
  for (const width of WIDTHS) {
    const page = await browser.newPage({
      viewport: { width, height: 900 },
      deviceScaleFactor: width <= 430 ? 2 : 1,
      isMobile: width <= 430,
      hasTouch: width <= 430,
      colorScheme,
      reducedMotion: 'reduce', // settle instantly so shots are deterministic
    });
    await page.goto(base + path, { waitUntil: 'load' });
    await page.waitForTimeout(250);

    const target = selector ? page.locator(selector) : page;
    await (selector
      ? target.screenshot({ path: `${outDir}${width}-${colorScheme}.png` })
      : page.screenshot({ path: `${outDir}${width}-${colorScheme}.png`, fullPage: true }));

    const r = await page.evaluate(audit);
    const bad =
      r.scrollW > r.clientW || r.overflow.length || r.lowContrast.length || r.smallTargets.length;
    if (bad) failures++;
    console.log(
      `${String(width).padStart(4)} ${colorScheme.padEnd(5)} ` +
        `scroll ${r.scrollW}/${r.clientW}` +
        (r.overflow.length ? `\n       overflow: ${r.overflow.join(', ')}` : '') +
        (r.lowContrast.length ? `\n       contrast: ${r.lowContrast.join('\n                 ')}` : '') +
        (r.smallTargets.length ? `\n       targets:  ${r.smallTargets.join(', ')}` : '')
    );
    await page.close();
  }
}

await browser.close();
console.log(failures ? `\n${failures} viewport(s) with findings` : '\nclean across all viewports');
