/** Verify the generated search-guide cluster without relying on a browser. */
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const SITE = 'https://exclamationdev.com';
const routes = [
  '/bloq/sayt-hazirlanmasi-qiymetleri-baki/',
  '/bloq/crm-sistemi-qiymeti-azerbaycan/',
  '/bloq/bitrix24-amocrm-ferdi-crm/',
  '/bloq/mobil-tetbiq-hazirlanmasi-qiymeti/',
  '/bloq/onlayn-magaza-hazirlanmasi-qiymeti/',
  '/ru/blog/stoimost-razrabotki-sayta-baku/',
  '/ru/blog/stoimost-crm-sistemy-azerbaydzhan/',
  '/ru/blog/bitrix24-amocrm-ili-individualnaya-crm/',
  '/ru/blog/stoimost-razrabotki-mobilnogo-prilozheniya/',
  '/ru/blog/stoimost-razrabotki-internet-magazina/',
  '/en/blog/website-development-cost-baku/',
  '/en/blog/crm-system-cost-azerbaijan/',
  '/en/blog/bitrix24-amocrm-or-custom-crm/',
  '/en/blog/mobile-app-development-cost/',
  '/en/blog/ecommerce-development-cost/',
];

const errors = [];
for (const route of routes) {
  const file = join('dist', route, 'index.html');
  if (!existsSync(file)) {
    errors.push(`${route}: HTML missing`);
    continue;
  }

  const html = readFileSync(file, 'utf8');
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (canonical !== `${SITE}${route}`) errors.push(`${route}: wrong canonical ${canonical}`);

  const alternates = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)];
  if (alternates.length !== 4) errors.push(`${route}: expected 4 alternates, got ${alternates.length}`);
  if (!alternates.some((match) => match[1] === 'x-default')) errors.push(`${route}: x-default missing`);

  const schemaText = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)?.[1];
  if (!schemaText) {
    errors.push(`${route}: JSON-LD missing`);
    continue;
  }
  const graph = JSON.parse(schemaText)['@graph'];
  const article = graph.find((node) => node['@type'] === 'Article');
  const faq = graph.find((node) => node['@type'] === 'FAQPage');
  if (!article) errors.push(`${route}: Article missing`);
  if (article?.url !== canonical) errors.push(`${route}: Article URL differs from canonical`);
  if (!article?.datePublished || !article?.dateModified) errors.push(`${route}: Article dates missing`);
  if (!faq?.mainEntity?.length) errors.push(`${route}: FAQPage questions missing`);
  for (const item of faq?.mainEntity ?? []) {
    if (!html.includes(item.name) || !html.includes(item.acceptedAnswer?.text)) {
      errors.push(`${route}: structured FAQ differs from visible copy`);
      break;
    }
  }

  const og = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
  const ogPath = og?.replace(`${SITE}/`, 'dist/');
  if (!ogPath || !existsSync(ogPath)) errors.push(`${route}: OG image missing at ${ogPath}`);
}

const sitemap = readFileSync('dist/sitemap.xml', 'utf8');
for (const route of routes) {
  if (!sitemap.includes(`<loc>${SITE}${route}</loc>`)) errors.push(`${route}: sitemap entry missing`);
}

console.log(`${routes.length} guide pages checked`);
console.log(errors.length ? `ERRORS (${errors.length})\n${errors.join('\n')}` : 'guide routes, metadata and structured copy are consistent');
process.exitCode = errors.length ? 1 : 0;
