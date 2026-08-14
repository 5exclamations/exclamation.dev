/**
 * Submit every URL in the built sitemap to IndexNow.
 *
 *   node scripts/indexnow.mjs [--dry-run] [--url <one-url> ...]
 *
 * WHY THIS EXISTS
 * ------------------------------------------------------------------
 * IndexNow is a push protocol: instead of waiting to be crawled, the site
 * tells the engine which URLs changed. Bing, Yandex, Seznam and Naver share
 * one endpoint, so a single POST reaches all of them. Google does not
 * participate — for Google the sitemap and Search Console are still the only
 * levers.
 *
 * Bing is the reason this is worth wiring up at all. ChatGPT Search reads
 * Bing's index, so a page Bing has not seen is a page ChatGPT cannot cite,
 * however welcome OAI-SearchBot is made in robots.txt.
 *
 * WHY IT IS NOT PART OF `npm run build`
 * ------------------------------------------------------------------
 * The build runs on every push, on every pull request, and weekly from
 * `weekly-rebuild.yml`, which exists only to keep the studio's age and the
 * year current. Announcing 42 unchanged URLs on that schedule is exactly the
 * pattern the endpoint rate-limits, and it would make the signal meaningless
 * on the one occasion it matters. This is a separate command, run by hand
 * after real content ships. See README.
 *
 * THE KEY
 * ------------------------------------------------------------------
 * Ownership is proved by hosting the key as a text file at the domain root,
 * which is what `public/<key>.txt` is. The key is not a secret — it is public
 * by design, it authorises nothing but "this host may submit its own URLs",
 * and it has to be readable by the endpoint. Do not move it to an env var.
 */
import { readFileSync } from 'node:fs';

const KEY = 'e866a9130b5722ac10e88535db80e790';
const HOST = 'exclamationdev.com';
const ORIGIN = `https://${HOST}`;
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');

/** explicit URLs win over the sitemap, for announcing one changed page */
const explicit = args.flatMap((a, i) => (a === '--url' ? [args[i + 1]] : [])).filter(Boolean);

function fromSitemap() {
  let xml;
  try {
    xml = readFileSync(new URL('../dist/sitemap.xml', import.meta.url), 'utf8');
  } catch {
    console.error('dist/sitemap.xml not found — run `npm run build` first.');
    process.exit(1);
  }
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].trim());
}

const urlList = explicit.length ? explicit : fromSitemap();

// The endpoint rejects the whole batch with 422 if one URL is off-host, so the
// check happens here where the failure names the offender.
const foreign = urlList.filter((u) => {
  try {
    return new URL(u).host !== HOST;
  } catch {
    return true;
  }
});
if (foreign.length) {
  console.error(`not on ${HOST}, refusing to submit:\n  ${foreign.join('\n  ')}`);
  process.exit(1);
}
if (!urlList.length) {
  console.error('nothing to submit.');
  process.exit(1);
}

console.log(`${urlList.length} URL(s), key at ${KEY_LOCATION}`);
for (const u of urlList) console.log(`  ${u}`);

if (dryRun) {
  console.log('\n--dry-run: nothing sent.');
  process.exit(0);
}

/**
 * The key file has to be live before the endpoint will believe the key, and a
 * 404 here produces a 403 there with no explanation of which of the two is
 * wrong. Checking first turns that into one clear sentence.
 */
const keyCheck = await fetch(KEY_LOCATION).catch(() => null);
if (!keyCheck?.ok) {
  console.error(
    `\n${KEY_LOCATION} is not reachable (${keyCheck?.status ?? 'no response'}).\n` +
      'Deploy first: the key file must be public before IndexNow will accept a submission.'
  );
  process.exit(1);
}
const served = (await keyCheck.text()).trim();
if (served !== KEY) {
  console.error(`\n${KEY_LOCATION} serves "${served}", expected "${KEY}".`);
  process.exit(1);
}

const res = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

/**
 * 200 accepted, 202 accepted but the key is still being verified — both are
 * success. Everything else is named rather than printed as a bare number,
 * because the status is the entire error message this API gives you.
 */
const MEANING = {
  400: 'bad request — malformed JSON or an invalid key format',
  403: 'key not valid — the file at keyLocation does not match the key sent',
  422: 'URLs do not belong to the host, or the key does not match the host',
  429: 'too many requests — this is the rate limit the build is kept away from',
};

if (res.status === 200 || res.status === 202) {
  console.log(`\nHTTP ${res.status} — ${urlList.length} URL(s) accepted.`);
} else {
  console.error(`\nHTTP ${res.status} — ${MEANING[res.status] ?? 'unexpected'}`);
  console.error((await res.text().catch(() => '')).slice(0, 400));
  process.exit(1);
}
