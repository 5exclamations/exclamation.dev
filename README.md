# EXCLAMATION — exclamationdev.com

Site for the EXCLAMATION development studio, Baku. One long landing page per
language plus a case page and a service page per topic, built with Astro and
deployed to Cloudflare Pages.

Read these in this order:

| File | What it covers |
| --- | --- |
| `HANDOFF.md` | State of the work, what is left, and the rakes already stepped on |
| `CLAUDE.md` | Project rules, structure, languages, stack |
| `CLOUDFLARE-SETUP.md` | The cutover, step by step |
| `SEO-AUDIT.md` | Indexability, structured data and AI visibility findings |
| `.claude/skills/exclamation-design/SKILL.md` | The design system. A contract, not a suggestion |

## Commands

| What | Command |
| --- | --- |
| Install | `npm install` |
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Preview the build | `npm run preview` |
| Screenshots and checks | `node scripts/shots.mjs <label> [selector] [path]` |
| Reduced-motion check | `node scripts/motion-check.mjs` |
| JSON-LD check | `node scripts/schema-check.mjs <schemaorg.jsonld>` |
| Broken links | `node scripts/links.mjs` |
| Core Web Vitals | `node scripts/vitals.mjs [url] [Slow4G\|Fast4G]` |
| **Announce URLs to IndexNow** | **`npm run indexnow`** |
| Cloudflare runtime locally | `npx wrangler pages dev dist --compatibility-date=2026-08-01` |

Node 18+. The `--compatibility-date` on `wrangler pages dev` is not optional
with the currently installed wrangler: without it wrangler defaults to today's
date, and its bundled runtime refuses to start on a date newer than its own
build.

## IndexNow

IndexNow is a push protocol. Rather than waiting to be crawled, the site tells
search engines which URLs changed. One POST reaches Bing, Yandex, Seznam and
Naver at once. **Google does not participate** — for Google the sitemap and
Search Console are still the only levers.

Bing is the point. ChatGPT Search answers out of Bing's index, so a page Bing
has not seen is a page ChatGPT cannot cite, no matter how welcome
`OAI-SearchBot` is made in `robots.txt`.

### When to run it

**After a deploy that publishes new or changed pages** — a new case, a new
service page, rewritten copy, a changed title or description. Not after a
deploy that only touches styles or scripts, and not on a schedule.

```bash
npm run build && npm run indexnow
```

It reads `dist/sitemap.xml`, so build first — it submits what you are about to
publish, or have just published.

To announce a single page instead of all 42:

```bash
node scripts/indexnow.mjs --url https://exclamationdev.com/is/new-case/
```

To see what would be sent without sending it:

```bash
npm run indexnow -- --dry-run
```

### Why it is not in `npm run build`

The build runs on every push, on every pull request, and weekly from
`weekly-rebuild.yml`, which exists only to keep the studio's age and the
current year true. Announcing 42 unchanged URLs on that cadence is the exact
pattern the endpoint rate-limits, and it would drown the one submission that
matters. It stays a manual command.

### The key

Ownership is proved by hosting the key at the domain root:
`public/e866a9130b5722ac10e88535db80e790.txt`, served at
`https://exclamationdev.com/e866a9130b5722ac10e88535db80e790.txt`.

**The key is public by design.** It is not a credential — it authorises
nothing except "this host may submit its own URLs", and the endpoint has to be
able to read it. Do not move it into an environment variable or a secret; that
breaks verification. If it ever needs rotating, generate a new hex string,
rename the file, and change `KEY` in `scripts/indexnow.mjs` — the three must
agree.

The script checks the key file is live and serves the expected value before it
submits anything, because a missing key file and a wrong key produce the same
opaque `403` from the endpoint.

### Statuses

`200` accepted, `202` accepted while the key is still being verified. Both are
success. `403` means the key file does not match, `422` means a URL is not on
this host, `429` is the rate limit.

---

<!-- Touching this line is a way to force a rebuild when nothing else changed. -->
// redeploy trigger
