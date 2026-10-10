import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const targets = [
  { name: 'raiton', url: 'https://raitonllc.com/' },
  { name: 'drvusala', url: 'https://drvusalagasimova.com/' },
];

const browser = await chromium.launch();

for (const t of targets) {
  const dir = `refs/${t.name}`;
  await mkdir(dir, { recursive: true });

  // desktop, retina — a portfolio screenshot is looked at closely
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();
  try {
    await page.goto(t.url, { waitUntil: 'networkidle', timeout: 60000 });
  } catch (e) {
    console.log(`${t.name}: ${e.message.split('\n')[0]}`);
  }
  await page.waitForTimeout(2500);

  const title = await page.title();
  const height = await page.evaluate(() => document.body.scrollHeight);
  console.log(`${t.name}  "${title}"  page height ${height}px`);

  await page.screenshot({ path: `${dir}/full.png`, fullPage: true });

  // one viewport per screenful, so a section can be picked out later
  const screens = Math.min(6, Math.ceil(height / 900));
  for (let i = 0; i < screens; i++) {
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), i * 900);
    await page.waitForTimeout(900);
    await page.screenshot({ path: `${dir}/screen-${String(i + 1).padStart(2, '0')}.png` });
  }

  await ctx.close();

  // phone, for the responsive claim
  const mob = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
  });
  const mp = await mob.newPage();
  try {
    await mp.goto(t.url, { waitUntil: 'networkidle', timeout: 60000 });
  } catch {}
  await mp.waitForTimeout(2000);
  await mp.screenshot({ path: `${dir}/mobile.png` });
  await mp.screenshot({ path: `${dir}/mobile-full.png`, fullPage: true });
  await mob.close();
}

await browser.close();
console.log('done');
