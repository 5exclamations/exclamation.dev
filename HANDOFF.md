# HANDOFF — EXCLAMATION

Rewritten 2026-08-04. **This file is the only thing you need to read to
continue.** It supersedes every earlier version; where it disagrees with a
commit message, this file is right.

Two documents sit beside it and are not optional:

- `.claude/skills/exclamation-design/SKILL.md` — the design contract. Colour,
  type, spacing, the diff-spine signature, the bans. **Read before writing any
  CSS.** If a value is not in it, it does not exist yet.
- `CLAUDE.md` — project conventions, commands, the git identity to commit with.

---

## 1. Where the project is

The site is a full rewrite on Astro, replacing a legacy static site that is
still what GitHub Pages serves. **42 pages build.** Everything is built and the
copy has been through the tone pass (§4); what is left is the cutover (§7).

```bash
cp .env.example .env        # fill in FORMSPREE_ID — see §8
npm install
npm run build && npm run preview   # http://localhost:4321
```

### Routes

| Kind | az (root) | ru | en |
| --- | --- | --- | --- |
| Home | `/` | `/ru/` | `/en/` |
| Cases (6) | `/is/<slug>/` | `/ru/is/<slug>/` | `/en/is/<slug>/` |
| 404 | `/404` | `/ru/404` | `/en/404` |

Case slugs: `crm-portal`, `fleks`, `merkuri`, `mindtrick`, `smart-fashion`,
`ai-assistent`.

Six service pages, with **a different slug per language on purpose** — the
slug is part of what the page ranks for:

| Service | az | ru | en |
| --- | --- | --- | --- |
| CRM / ERP | `/xidmetler/crm-erp-sistemleri/` | `/ru/uslugi/crm-erp/` | `/en/services/crm-erp/` |
| Web | `/xidmetler/veb-sayt-hazirlanmasi/` | `/ru/uslugi/razrabotka-saytov/` | `/en/services/web-development/` |
| Mobile | `/xidmetler/mobil-tetbiq-hazirlanmasi/` | `/ru/uslugi/razrabotka-mobilnyh-prilozheniy/` | `/en/services/mobile-app-development/` |
| E-commerce | `/xidmetler/onlayn-magaza/` | `/ru/uslugi/internet-magazin/` | `/en/services/ecommerce-development/` |
| Integrations | `/xidmetler/inteqrasiya-ve-avtomatlasdirma/` | `/ru/uslugi/integracii-i-avtomatizaciya/` | `/en/services/integrations-automation/` |
| Bots / AI | `/xidmetler/botlar-ve-ai-helleri/` | `/ru/uslugi/boty-i-ai/` | `/en/services/bots-ai/` |

Landing sections, in the order fixed by SKILL.md §3 — no two adjacent sections
may share a skeleton: `hero`, `services`, `why`, `work`, `metrics`, `process`,
`tech`, `facts`, `faq`, `contact`, `finalcta`, then the footer.

### Also done

- **Images** go through `astro:assets` (`<Picture>`, avif + webp, four widths).
  Home-page image payload measured in a browser: ~1030 kB → 67 kB at 390px.
- **SEO**: `robots.txt` naming 13 AI crawlers, generated `sitemap.xml`
  (39 URLs, `xhtml:link` alternates, no 404s), JSON-LD as one `@graph` per
  page, `llms.txt`, per-page hand-written titles and descriptions.
- **OG cards**: 42 PNGs rendered at build by satori + sharp, using the site's
  own fonts (see §6).
- **Weekly rebuild**: `.github/workflows/weekly-rebuild.yml`, Mondays 04:17
  UTC, so the computed year and studio age cannot go stale. It asserts both
  appear in the output and fails loudly if not.

---

## 2. Client decisions — standing, do not reopen

These were settled in conversation. Treat them as constraints, not preferences.

1. **No cost figures on commercial pages. Ever.** No price list, no "from
   N manat", no ranges, no tiers — on service pages, the landing page, the FAQ
   or anywhere else. In their place: a "what moves the quote" block naming the
   real drivers, and the free estimate delivered 3–5 days after the brief. The
   duration is what satisfies the number-or-duration rule, so a lead paragraph
   can still answer "what does it cost" without a figure. Also written into
   SKILL.md §10.
2. **Do not restructure the footer.** Six rows out of nine service categories
   is the intended state. "Online stores" stays an item inside the Web
   category and the e-commerce page gets no footer row; it is reached from the
   web copy and the services menu.
3. **No testimonials, and no placeholder.** Three fake ones were removed from
   the legacy site. Nothing goes back until there are two real quotes with a
   name and a company attached. No `AggregateRating`, no `Review` in JSON-LD.
4. **The spine terminates on every route,** not only the landing page.
   `SpineEnd.astro` sits in `Base.astro` above the footer and owns the dot;
   `finalcta` is only the landing page's closing call.
5. **The metrics band carries three figures** — projects, years, languages.
   The technologies count was removed from it because "40+ projects" next to
   "40 technologies" read as an error. The number still appears, still counted
   from the data, in the stack section.
6. **Formspree is the form backend** and the client verifies it themselves.
   Progressive enhancement is ~30 lines of `fetch`, not `@formspree/ajax` —
   the site has zero runtime dependencies and keeps it that way.
7. **No print stylesheet.** Nav stays at four items.

---

## 3. Verification — what "checked" means here

**Never report success off a green build.** Look at the screenshots.

```bash
npm run build && npm run preview
node scripts/shots.mjs <label> [selector] [path]   # 6 widths x 2 themes + audits
node scripts/motion-check.mjs                      # proves reduced-motion fires
node scripts/schema-check.mjs <schemaorg.jsonld>   # JSON-LD vs the vocabulary
npx wrangler pages dev dist                        # the real Cloudflare runtime
```

`shots.mjs` fails on horizontal overflow, text under 4.5:1 and tap targets
under 44px, across 320/390/768/1024/1440/1920 in both themes. Output lands in
`.shots/<label>/` (gitignored).

For `schema-check.mjs`, fetch the vocabulary first:

```bash
curl -s -o /tmp/schemaorg.jsonld https://schema.org/version/latest/schemaorg-current-https.jsonld
```

It checks every `@type` and property against the real schema.org vocabulary
and has already caught one live error. **`validator.schema.org` cannot be used
before the site is public** — its snippet endpoint answers
`fetchError: NOT_FOUND` for a POSTed `code`. Run the hosted validator by URL
after cutover.

**Working agreement with the art director:** show two or three sections at a
time, never one. Run the six widths in both themes and fix what you find
before showing anything.

### Last measured performance

Landing page, Cloudflare Pages runtime, 390×844 DPR 3, 4× CPU throttling:

| Metric | Slow 4G | Fast 4G | Target |
| --- | --- | --- | --- |
| LCP | 1613 ms | 992 ms | < 1800 ms |
| CLS | 0.00 | 0.00 | < 0.05 |
| INP | — | 87 ms | < 200 ms |

HTML after gzip: 20.8 kB (az home), 22.3 kB (ru home), 16.5 kB (a service
page), 10.0 kB (a case page) — against a 50 kB budget.

**The service pages have not been profiled.** They were built after that
measurement. Re-run before cutover.

---

## 4. The tone pass — done 2026-08-04

All eighteen locale blocks of the six service pages have been through it
(`d458a81`, `7155b89`, `c1ded58`, `7df243f`, `27af51e`, `0679d52`). This
section stays because it is the copy contract for anything written next: a new
service page, a case page, or a rewrite of the landing copy has to come out
the same way.

**The rule: tone changes, facts do not.** Durations, scope lists, the
no-prices decision and the "when you do not need this" conditions stayed
exactly as they were, and must keep doing so.

### Two shapes no pass may touch

Both exist for answer engines, not for the reader's pleasure. Livelier wording
inside them is fine; the structure is not.

1. **The lead paragraph of every page and block stays answer-first** — two or
   three sentences that answer the question in the heading, carrying a number
   or a duration that can be lifted into someone else's answer with no edit and
   no surrounding context. Answer first, unfold after. The tells below are to
   be removed from it, but not by delaying the answer, and not by moving the
   figure further down. `lead` fields in `src/i18n/services/*.ts` are what this
   names.
2. **Every FAQ answer stays self-contained.** It reads correctly quoted on its
   own, away from the page: no "as described above", no "this stage", no
   pronoun whose referent is a paragraph higher up. Each answer repeats
   whatever it needs — the term, the timeframe, the condition.

Also written into SKILL.md §10, which is the copy contract; this section is
the working record of how the pass read it.

### The eight tells

1. Paragraphs all the same length, three or four sentences each, never a short
   one.
2. "Not just X, but Y" and "this is not about X — it is about Y". Antithesis
   built on a dash.
3. Lists of three everywhere, including where two or five was the honest
   number.
4. Throat-clearing before the point: "it is important to understand", "it is
   worth noting", "as a rule".
5. A summarising sentence closing every section.
6. Marker words: comprehensive, effective, key, seamless, powerful tool.
7. Hedging nobody asked for: "in some cases", "may vary".
8. Every paragraph opening on its subject; none on "And", "But", "Whereas".

### What is wanted instead

Break the rhythm — a short sentence after a long one, sometimes a fragment
with no verb. Paragraphs of uneven length: five lines here, one line there.
Direct statements without insurance on both sides. Uneven transitions; real
writing is not always glued together logically.

### What the pass actually took — the client's correction

The first take was a word-level edit: hedges out, marker words out, throat
clearing out. **It was rejected as too cautious.** The direction that was
accepted:

> Правка структуры, а не слов. Ровный столбик из трёх строк выдаёт машину
> сильнее, чем любое отдельное слово.

Concretely, and this is the bar for new copy:

- **Every prose block has one paragraph of a single line,** and it is a whole
  sentence, not a fragment of its neighbour. It lands in a different place in
  each of the eighteen blocks — a copied position is the same tell one level up.
- **`notFor` items run from one line to five.** Compress by rewriting, never by
  deleting the argument.
- **FAQ answers spread from one sentence to five.** The self-contained rule
  above does not require equal length: a simple question gets one sentence that
  still names its term, its timeframe and its condition.
- **Verbless sentences are wanted,** in all three languages.
- **A paragraph may open on And / But / Зато / И / Zaten.**
- The free-estimate note **reads differently on each of the six pages.** The
  same sentence six times was itself the tell.

### Three things the pass was told not to do

Standing, unless the client reopens them:

1. **Do not touch `meta.description`.** Typos in it may be fixed; the prose may
   not be rewritten. (`AmoCRM` → `amoCRM` was fixed under that rule.)
2. **Do not split single-string fields into arrays** by editing `ServiceCopy`.
   `intro` is the only array, so it is the only place a one-line paragraph can
   exist without a type change. `pricing.lead`, `notFor.close` and `cta.text`
   stay single strings.
3. **Do not cut a commercial line from a FAQ answer for rhythm** — "каждая
   интеграция отдельная строка в смете", "привязки к нам нет", "quoted before
   it starts" and their siblings stay.

### What was left alone on purpose

`а не` / `not` survives in seven places where it is a factual contrast inside a
sentence — "база лежит в вашем аккаунте, а не в чужом кабинете", "падение видим
мы, а не вы". The banned tell is the rhetorical antithesis built on a dash, not
every contrast. The client confirmed this on 2026-08-04.

Four `titleMain` clauses were rewritten because they *were* that antithesis:

| Page | Was | Now |
| --- | --- | --- |
| crm-erp ru | под ваш процесс, а не под чужую коробку | когда коробка уже не тянет |
| ecommerce ru | на своей платформе, а не на чужой комиссии | ваш каталог, ваша база клиентов |
| ecommerce en | the store, not the storefront | built to take the order |
| bots-ai ru | снимают часть нагрузки, а не всю | часть обращений закрывают без человека |

`titleMain` feeds the OG cards through `serviceCopy` in
`src/pages/og/[key].png.ts` — rebuild and look at the PNG after changing one.

### Lengths, before and after

A tone pass should not move the word count much, and it did not. Counted as
words containing a letter inside the single-quoted strings of each locale
block; the numbers in the previous version of this table came out ~5 words
lower on the same files, so compare within a column, not across methods.

| File | az | ru | en |
| --- | --- | --- | --- |
| `crm-erp.ts` | 947 → 955 | 985 → 977 | 1260 → 1235 |
| `web.ts` | 891 → 897 | 922 → 928 | 1164 → 1176 |
| `mobile.ts` | 923 → 919 | 943 → 935 | 1215 → 1197 |
| `ecommerce.ts` | 919 → 911 | 969 → 937 | 1208 → 1184 |
| `integrations.ts` | 928 → 907 | 974 → 955 | 1230 → 1210 |
| `bots-ai.ts` | 878 → 874 | 915 → 918 | 1181 → 1173 |

### Still carrying the tells

**The landing page and the case pages were not part of this pass.** The eight
tells were only ever hunted on the six service pages. Whoever picks up
`src/i18n/az.ts` / `ru.ts` / `en.ts` should expect to find them there.

`AmoCRM` is still misspelled in six places on the landing page —
`src/i18n/{az,ru,en}.ts` lines ~116 and ~367. The product is **amoCRM**.

---

## 5. Findings no automated check catches

Every one of these passed `shots.mjs` — clean contrast, no overflow, tap
targets fine — and was still wrong. They were found by opening the screenshot.

**CSS `text-transform: uppercase` follows the document language.** On the az
page it applies Azerbaijani casing, so `.mono` turned the English category
names "Mobile" and "AI / Integrations" into **MOBİLE** and **INTEGRATİONS**.
Correct for real Azerbaijani words — `Ritm` → `RİTM` is right — and wrong for
product names. Any uppercased English string on the az page needs `lang="en"`
on its element; see `Tech.astro`. Russian is not Turkic-cased, so `i` → `I`
there and no hazard exists. A sweep confirmed every English product name in
the project either renders with `text-transform: none` or carries `lang="en"`.

**satori has no document language**, so its own `textTransform: uppercase` is
locale-invariant and produced `BƏRI` instead of `BƏRİ` on the OG cards. Cased
explicitly per locale in `src/pages/og/[key].png.ts`.

**A trailing em dash in `titleMuted` wraps to the start of the next line.**
Use a non-breaking space before it: `'…  —'`. All service titles do.

**The two-tone `h1` split wherever `text-wrap: balance` landed,** so the main
clause could start mid-line — the Azerbaijani integrations title read
"avtomatlaşdırma — eyni / məlumatı…", which is one sentence in two colours
rather than two clauses. `.svc-title .muted` is now `display: block`, making
the split deterministic. Short titles render identically.

**A portrait screenshot in a landscape frame shows a slice of nothing.**
`ServicePage` hardcoded `16/10` with `object-fit: cover`, so MindTrick — a
566×1280 phone screen — rendered as a horizontal band. It now reads
`media.shape` and `media.fit` the way the work index always did.

**One case has no screenshots.** `ai-assistent` ships `shots: []` and draws
the `CaseChat` mockup instead. The work index handled that; `ServicePage` did
not, and would have thrown on `shots[0].img` the first time a page linked it.
Fixed. Any new component rendering case media must handle the empty array.

**A service with exactly one relevant case** gets a single-column grid capped
at 40rem, or the lone card reads as a missing second one.

**Alt text written from case descriptions is fiction.** Fifteen alts were
written from the copy and three were wrong: `crm/screen2` is the property
database (not the Kanban), `crm/screen3` is the Kanban, `merk/screen.png` is
the partners-and-brokers catalogue. Open every image and describe what is
actually on it.

**Screenshot crops need looking at, not calculating.** Narrow viewports get a
1:1 detail crop positioned onto a legible region (`crop: [renderWidth, left,
top]` in `src/data/cases.ts`). Two retunes were needed because a crop tuned
for a client card landed on an empty part of a Kanban board.

**`sizes` must state the rendered width, not the viewport.** Below 640 the
hero and the case gallery render at a fixed crop width and slide the image
under the frame; left at `100vw` the browser picks a candidate narrower than
the pixels it paints and the crop goes soft.

**Element screenshots include the sticky header** floating mid-image. Capture
artifact, not a layout bug. Do not "fix" it.

**1024 is where two-column sections break** — and 768 for anything with a
seven-column block. Check both explicitly, every time.

**A third grey fails contrast.** `--fg-faint` measured 2.73:1 and was deleted.
There are exactly two text levels. Recede with size, weight or strike-through.

---

## 6. Architecture worth knowing before you touch it

**Copy lives in `src/i18n`, never in components.** `az.ts` / `ru.ts` / `en.ts`
for the landing page and cases; `src/i18n/services/<key>.ts` for each service
page, exporting `Record<Locale, ServiceCopy>`. The `ServiceCopy` type in
`services/types.ts` is deliberately demanding — a half-written page will not
compile.

**Service pages are written three times, not translated once.** Each language
argues differently because each is chasing different queries. A word-swapped
template ranks on none of them.

**Adding a service page is four steps:** a route entry in
`src/data/services.ts` with the slug for each locale; a copy file; three
~20-line page files passing `alternates`, `faq`, `ogKey` and
`schemaKind="service"` to `Base`; one line in the `serviceCopy` map in
`src/pages/og/[key].png.ts`. The sitemap and the footer pick it up on their
own.

**Per-locale slugs break the site's usual routing assumption.** Everywhere
else a route is one locale-free path plus a prefix, and canonical, hreflang
and the language switcher derive from that. Service pages pass an explicit
`alternates` record through `Base`, `Header` and `Footer`. Without it the
language switcher sends a Russian reader to `/ru/xidmetler/…` and a 404.

**The footer keeps itself current.** `serviceForCategory()` maps a
landing-page category to its page; linked categories sort first, unlinked keep
the `#services` anchor. Adding `categoryIndex` to a route is the whole of the
work — there is no list to edit.

**Numbers in copy describe the data, never the reverse.** `{tech}` resolves
from `techCats` at build time, `{years}` and `{now}` from `FOUNDED` and the
build date, all through `fill()`. Trim two entries from the stack and the
figure follows on its own. If a figure and a list can disagree, compute it.

**The inverted section re-derives role tokens.** `.invert` in `tokens.css`
rebinds `--fg-muted`, `--line` and friends to the opposite theme's formulas,
because those are mixes against the background — left unflipped they land at
1.5:1. Components keep using the same role names.

**Trailing slashes are load-bearing.** Cloudflare 308s `/ru` to `/ru/`, so
`localePath()` always ends in a slash and Astro is set to
`trailingSlash: 'always'`. Without it every canonical and hreflang points at a
redirect.

**Localised 404s.** Cloudflare walks up from the requested path looking for
`404.html`, and Astro only special-cases the root one. An `astro:build:done`
hook in `astro.config.mjs` copies the localised ones to the sibling path that
walk expects. Verified against the real Pages runtime: `/ru/is/nope` returns
the Russian 404 with a 404 status.

**Stylesheets are inlined** (`inlineStylesheets: 'always'`). Two external
files at ~3.7 kB gzip were costing a render-blocking round trip each, about
580 ms apiece on throttled 4G.

**The hero image is preloaded from a shared config.** `HERO_IMAGE` in
`data/cases.ts` is used by both `Hero.astro` and the preload in `Base.astro`,
so the URLs cannot drift and double-fetch.

**satori cannot read the site's fonts directly.** They are variable woff2, and
its opentype.js fork dies on `fvar` because the subsetter dropped the `name`
records that table points at. `src/lib/instance-font.ts` pins them to a single
weight using the hb-subset wasm inside `harfbuzzjs`. Stripping `fvar` instead
would leave the default master, which for Geologica is Thin.

**Astro emits the original file for every imported image** — 15 files, ~2 MB
in `dist/_astro`, none of them referenced. This is Vite emitting on import,
not on reference; proved by importing an image, reading only its `.width`, and
watching the original appear anyway. Unavoidable while using `astro:assets`.
The client accepted it. Users never download them.

**Astro scoped styles do not reach child components.** Shared motion utilities
live in `src/styles/base.css` (`.anim`, `.anim-lift`). The same trap applies
to grid placement on a child's root — wrap it in a div you own.

**`<picture>` is removed from layout** with `display: contents`, so the frame
rules that size the `<img>` keep addressing it directly.

---

## 7. Remaining before launch

1. **Profile the service pages** — Core Web Vitals and gzip size. Only the
   landing page has been measured. This is next.
2. **Cutover to Cloudflare Pages.** Set the build environment (§8), deploy,
   then delete the legacy files and turn off GitHub Pages.
3. **Delete the legacy site** — `index.html`, `style_dark.css`,
   `style_light.css`, `translations.js` and the root `pics/`. Still present
   because GitHub Pages serves them; deleting now takes the live site down.
   `translations.js` is also the source of the client's original copy, so
   check anything you still need out of it first. Note it misspells
   **MindTrack**; the product is **MindTrick** — verify product names against
   screenshots, not translations.
4. **Run `validator.schema.org` by URL** once the site is public (§3).
5. **Take the tone pass to the landing page and the case pages** if the client
   wants it — the six service pages are done, those are not (§4).

### Debt carried deliberately

- **Two `sameAs` fields are empty on purpose.** LinkedIn is commented out in
  `src/data/org.ts` — the client is creating the company page and will supply
  the URL. A `sameAs` asserts control of a URL, so a guessed one is worse than
  a missing one.
- **The address is city-level.** `ADDRESS` has locality and country only, and
  `GEO` is the centre of Baku, not the office. The client will supply a street
  address after registering a Google Business Profile.
- **`/faq/` as a full page** of 25–30 questions is deferred. The eight on the
  landing page stay as they are.
- **Turnstile is a stub.** The slot renders empty until `TURNSTILE_SITE_KEY`
  is set; wiring the widget and its server-side verification is a deploy-step
  task.
- **Four of the nine service categories have no page** — web apps and
  platforms, analytics and accounting, specialised solutions, modernisation
  and support. Not planned; they keep the `#services` anchor. Five have pages,
  and e-commerce is a page with no category (decision 2 in §2).

---

## 8. Build environment

Two variables, read in `BriefForm.astro` frontmatter at build time. Neither is
committed; `.env` is gitignored and `.env.example` documents the shape. Set
both in the Cloudflare Pages build environment at cutover.

| Variable | Effect when unset |
| --- | --- |
| `FORMSPREE_ID` | the form renders with an empty `action`, the submit script does not arm itself, and the build logs a warning. The mailto path under the button still works. |
| `TURNSTILE_SITE_KEY` | the `.brief-turnstile` slot renders empty and collapses. **This is the deploy-step stub.** |

The id is the part after `/f/` in the Formspree endpoint. The legacy
`index.html` still carries it inline; that disappears at cutover, but it is
already in git history, so treat it as known rather than secret and rotate it
if that matters.

`git` has no global identity here. Commit with
`-c user.name="Texa" -c user.email="texranhamidzada@gmail.com"`.
