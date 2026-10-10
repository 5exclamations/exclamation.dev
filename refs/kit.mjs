import { chromium } from 'playwright';
const b = await chromium.launch();
for (const scheme of ['light','dark']) {
  const ctx = await b.newContext({ viewport:{width:1200,height:950}, colorScheme: scheme, deviceScaleFactor: 2 });
  const p = await ctx.newPage();
  await p.goto('http://localhost:4321/kit.html', { waitUntil:'networkidle' });
  await p.waitForTimeout(1200);
  const h = await p.evaluate(()=>document.body.scrollHeight);
  console.log(scheme, 'height', h);
  // sections, one shot each
  const marks = await p.evaluate(()=>[...document.querySelectorAll('header.doc, section.block')].map(e=>Math.round(e.getBoundingClientRect().top+window.scrollY)));
  for (let i=0;i<marks.length;i++){
    await p.evaluate(y=>window.scrollTo({top:y-40,behavior:'instant'}), marks[i]);
    await p.waitForTimeout(350);
    await p.screenshot({ path:`kit/${scheme}-${String(i).padStart(2,'0')}.png` });
  }
  // overflow check
  const over = await p.evaluate(()=>[...document.querySelectorAll('body *')].filter(el=>el.getBoundingClientRect().right>document.documentElement.clientWidth+1).map(el=>el.tagName+'.'+el.className).slice(0,10));
  console.log(scheme, 'overflow:', over.length? over : 'none');
  await ctx.close();
}
// narrow
const ctx = await b.newContext({ viewport:{width:390,height:844}, deviceScaleFactor:2 });
const p = await ctx.newPage();
await p.goto('http://localhost:4321/kit.html', { waitUntil:'networkidle' });
await p.waitForTimeout(1000);
const over = await p.evaluate(()=>[...document.querySelectorAll('body *')].filter(el=>el.getBoundingClientRect().right>document.documentElement.clientWidth+1).map(el=>el.tagName+'.'+String(el.className).slice(0,40)).slice(0,10));
console.log('390 overflow:', over.length? over : 'none');
await p.screenshot({ path:'kit/mobile.png' });
await p.evaluate(()=>{const el=document.querySelector('.prompt'); window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-20,behavior:'instant'});});
await p.waitForTimeout(300);
await p.screenshot({ path:'kit/mobile-prompt.png' });
await b.close();
