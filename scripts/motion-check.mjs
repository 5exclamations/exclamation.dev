/**
 * Proves the prefers-reduced-motion branch actually fires.
 *
 * Runs the first screen twice — once with reduced motion requested, once
 * without — samples the hero mid-animation, and writes a screenshot pair.
 * With reduce, the headline must never be displaced: transform stays none
 * and only opacity moves.
 *
 *   node scripts/motion-check.mjs [baseUrl]
 */
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const base = process.argv[2] ?? 'http://localhost:4321';
const outDir = new URL('../.shots/motion/', import.meta.url).pathname;
await mkdir(outDir, { recursive: true });

const sample = async (reducedMotion) => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1280, height: 800 },
    reducedMotion,
    colorScheme: 'light',
  });

  await page.goto(base, { waitUntil: 'commit' });
  await page.waitForSelector('.hero-title .line-in');
  // sample while the opening scene would still be running
  await page.waitForTimeout(90);

  const mid = await page.evaluate(() => {
    const read = (sel) => {
      const el = document.querySelector(sel);
      const cs = getComputedStyle(el);
      return {
        animationName: cs.animationName,
        animationDuration: cs.animationDuration,
        transform: cs.transform,
        opacity: +(+cs.opacity).toFixed(2),
      };
    };
    return {
      titleLine: read('.hero-title .line-in'),
      diffRow: read('.diff-row'),
      spine: read('.spine'),
      scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
    };
  });

  await page.screenshot({ path: `${outDir}mid-${reducedMotion}.png` });
  await page.waitForTimeout(900);
  await page.screenshot({ path: `${outDir}settled-${reducedMotion}.png` });

  await browser.close();
  return mid;
};

const reduce = await sample('reduce');
const normal = await sample('no-preference');

const displaced = (t) => t && t !== 'none' && t !== 'matrix(1, 0, 0, 1, 0, 0)';
const problems = [];
for (const [key, val] of Object.entries(reduce)) {
  if (key === 'scrollBehavior') continue;
  if (displaced(val.transform)) problems.push(`${key} is displaced under reduce: ${val.transform}`);
  if (val.animationName === 'lift' || val.animationName === 'rise' || val.animationName === 'draw')
    problems.push(`${key} still runs the motion keyframes: ${val.animationName}`);
}
if (reduce.scrollBehavior === 'smooth') problems.push('scroll-behavior stayed smooth under reduce');

console.log('reduce         ', JSON.stringify(reduce, null, 2));
console.log('no-preference  ', JSON.stringify(normal, null, 2));
console.log(problems.length ? `\nFAIL\n- ${problems.join('\n- ')}` : '\nOK — reduced motion collapses to opacity only');
process.exit(problems.length ? 1 : 0);
