import { chromium } from 'playwright';
const b = await chromium.launch();
for (const url of ['https://raitonllc.com/', 'https://drvusalagasimova.com/']) {
  const p = await (await b.newContext({viewport:{width:1440,height:900}})).newPage();
  await p.goto(url, {waitUntil:'networkidle', timeout:60000});
  const info = await p.evaluate(() => ({
    title: document.title,
    lang: document.documentElement.lang,
    desc: document.querySelector('meta[name=description]')?.content?.slice(0,180),
    generator: document.querySelector('meta[name=generator]')?.content,
    links: [...new Set([...document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href')).filter(h=>h&&!h.startsWith('http')&&!h.startsWith('tel')&&!h.startsWith('mailto')))].slice(0,30),
    h2: [...document.querySelectorAll('h2')].map(h=>h.textContent.trim().replace(/\s+/g,' ')).slice(0,12),
    imgs: document.querySelectorAll('img').length,
  }));
  console.log(url); console.log(JSON.stringify(info,null,1)); console.log('---');
}
await b.close();
