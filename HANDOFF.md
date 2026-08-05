# HANDOFF — EXCLAMATION

Rewritten 2026-08-05. **This file is the only thing you need to read to
continue.** It supersedes every earlier version; where it disagrees with a
commit message, this file is right.

Two documents sit beside it and are not optional:

- `.claude/skills/exclamation-design/SKILL.md` — the design contract. Colour,
  type, spacing, the diff-spine signature, the copy rules, the bans. **Read
  before writing any CSS or any copy.** If a value is not in it, it does not
  exist yet.
- `CLAUDE.md` — project conventions, commands, the git identity to commit with.

---

## 1. Where the project is

A full rewrite on Astro, replacing a legacy static site that is still what
GitHub Pages serves. **45 pages build.** Everything is built and every word on
the site has been through the tone pass (§4). The full FAQ page landed
2026-08-05. What is left is the cutover (§7).

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
| FAQ | `/faq/` | `/ru/faq/` | `/en/faq/` |
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
  UTC, so the computed year and studio age cannot go stale.

---

## 2. Client decisions — standing, do not reopen

Settled in conversation. Constraints, not preferences.

1. **No cost figures on commercial pages. Ever.** No price list, no "from
   N manat", no ranges, no tiers — service pages, landing, FAQ, anywhere. In
   their place: a "what moves the quote" block naming the real drivers, and
   the free estimate delivered 3–5 days after the brief. The duration is what
   satisfies the number-or-duration rule, so a lead paragraph can still answer
   "what does it cost" without a figure. Also in SKILL.md §10.
2. **Do not restructure the footer.** Six rows out of nine service categories
   is the intended state. "Online stores" stays an item inside the Web
   category and the e-commerce page gets no footer row.
3. **No testimonials, and no placeholder.** Nothing goes back until there are
   two real quotes with a name and a company. No `AggregateRating`, no
   `Review` in JSON-LD.
4. **The spine terminates on every route.** `SpineEnd.astro` sits in
   `Base.astro` above the footer and owns the dot; `finalcta` is only the
   landing page's closing call.
5. **The metrics band carries three figures** — projects, years, languages.
6. **Formspree is the form backend** and the client verifies it themselves.
   Progressive enhancement is ~30 lines of `fetch`, not `@formspree/ajax`.
7. **No print stylesheet.** Nav stays at four items.
8. **Delivery timelines are the compressed ones** settled 2026-08-05 (§5).
   Do not "restore" the older, longer figures — they were wrong.
9. **Eight process promises** made on the FAQ page are approved and may be
   repeated elsewhere (§5).

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
`.shots/<label>/` (gitignored). It takes ~4 minutes per page — budget for it.

For `schema-check.mjs`, fetch the vocabulary first:

```bash
curl -s -o /tmp/schemaorg.jsonld https://schema.org/version/latest/schemaorg-current-https.jsonld
```

**`validator.schema.org` cannot be used before the site is public** — its
snippet endpoint answers `fetchError: NOT_FOUND` for a POSTed `code`. Run the
hosted validator by URL after cutover.

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

**The service pages have not been profiled.** Re-run before cutover.

---

## 4. The copy contract

The tone pass is **done** — all eighteen service-page locale blocks, all three
landing pages and all three sets of case copy. This section is what any new
copy has to satisfy.

### The rule: tone changes, facts do not

Scope lists, the no-prices decision and the "when you do not need this"
conditions stay as they are. Durations are facts too — they changed once, on
the client's instruction (§5), and are now fixed.

### Two shapes no pass may touch

Both exist for answer engines. Livelier wording inside them is fine; the
structure is not.

1. **The lead paragraph of every page and block stays answer-first** — two or
   three sentences answering the question in the heading, carrying a number or
   a duration liftable into someone else's answer with no edit and no context
   from the page. Answer, then unfold. `lead` fields in
   `src/i18n/services/*.ts`.
2. **Every FAQ answer is self-contained.** It reads correctly quoted on its
   own: no "as described above", no "this stage", no pronoun pointing at a
   paragraph higher up. Each answer repeats the term, the timeframe, the
   condition it needs.

### The eight tells

1. Paragraphs all the same length, three or four sentences each.
2. "Not just X, but Y" and "this is not about X — it is about Y". Antithesis
   built on a dash.
3. Lists of three everywhere, including where two or five was honest.
4. Throat-clearing: "it is important to understand", "as a rule".
5. A summarising sentence closing every section.
6. Marker words: comprehensive, effective, key, seamless, powerful tool.
7. Hedging nobody asked for: "in some cases", "may vary".
8. Every paragraph opening on its subject; none on "And", "But", "Зато".

### Structure, not words — the correction that mattered

The first take was a word-level edit and **was rejected as too cautious**:

> Правка структуры, а не слов. Ровный столбик из трёх строк выдаёт машину
> сильнее, чем любое отдельное слово.

The bar for new copy:

- **Every prose block has one single-line paragraph,** and it is a whole
  sentence carrying a fact, a figure or a concession. **The test is deletion:
  if the line can be removed and nothing is lost, it was decoration.** A short
  bridge sentence written only to break rhythm is a new marker, not a cure for
  the old one — `Всё это измеряется.` was cut for exactly this. The one-liner
  lands in a different place in each of the eighteen blocks; a copied position
  is the same tell one level up.
- **`notFor` items run from one line to five.** Compress by rewriting, never
  by deleting the argument.
- **FAQ answers spread from one sentence to five.** Self-containment does not
  require equal length.
- **Verbless sentences are wanted,** in all three languages.
- **A paragraph may open on And / But / Зато / И.**
- **A device applied by rule is the tell again.** Varying the opening of six
  case descriptions is worthless if all six end up varied the same way: the
  first attempt replaced five `Разработали` with six bare noun phrases and
  four colons, and was sent back. Now at least two of six open on a verb or an
  adverbial and at most two carry a colon.
- The free-estimate note **reads differently on each of the six service
  pages.** The same sentence six times was itself the tell.

### Three things the pass was told not to do

Standing, unless the client reopens them:

1. **Do not rewrite `meta.description`.** Typos and wrong numbers in it may be
   fixed; the prose may not be reworked.
2. **Do not split single-string fields into arrays** by editing `ServiceCopy`.
   `intro` is the only array, so it is the only place a one-line paragraph can
   exist without a type change.
3. **Do not cut a commercial line from a FAQ answer for rhythm** — "каждая
   интеграция отдельная строка в смете", "привязки к нам нет", "quoted before
   it starts" and their siblings stay.

### What was left alone on purpose

`а не` / `not` survives in seven places where it is a factual contrast inside
a sentence — "база лежит в вашем аккаунте, а не в чужом кабинете", "падение
видим мы, а не вы". The banned tell is the rhetorical antithesis built on a
dash, not every contrast. Confirmed 2026-08-04.

Seven `titleMain` clauses **were** that antithesis and were rewritten. All
seven feed the OG cards through `serviceCopy` / `dict.hero` in
`src/pages/og/[key].png.ts` — rebuild and look at the PNG after changing one.

| Page | Was | Now |
| --- | --- | --- |
| home ru | Не расход — актив | MVP за 7–14 дней |
| home az | Xərc yox — aktiv | İlk işlək versiya 7–14 günə |
| home en | Not a cost — an asset | A working version in 7–14 days |
| crm-erp ru | под ваш процесс, а не под чужую коробку | когда коробка уже не тянет |
| ecommerce ru | на своей платформе, а не на чужой комиссии | ваш каталог, ваша база клиентов |
| ecommerce en | the store, not the storefront | built to take the order |
| bots-ai ru | снимают часть нагрузки, а не всю | часть обращений закрывают без человека |
| bots-ai az | operatorun əvəzinə deyil, onun yükünü azaldan | təkrarlanan sualları özü bağlayır |

The `facts` section headings announced their own honesty (`Не лозунги —
цифра, срок и название инструмента`) and now name their contents instead:
`Сроки, ритм / и права на код`, `Müddət, ritm / və koda hüquq`,
`Timelines, rhythm / and who owns the code`.

**Section headings render muted and main inline** (`<span class="muted">{muted}</span> {main}`),
so the wrap can fall anywhere. The seam needs punctuation — a comma or a full
stop — or the break lands inside the dark clause and the two colours read as
one broken sentence. `Что мы обещаем / и чем это подтверждается` failed on
exactly this.

### Per-language notes

**Azerbaijani is written from the Azerbaijani, never translated.** A grammar
pass (`f6ccf13`) found calques the tone pass had missed because it was hunting
markers, not syntax:

- `açar qərarlar` for «ключевые решения» — `açar` is a door key
- `Tapşırığınızı danışın` — accusative with `danışmaq` copies «рассказать
  что-то»; the ablative is correct, and `danışmaq` **does** take an accusative
  content object (`nağıl danışmaq`), so not every instance is wrong
- comma before `və`, three places
- `plus` as a conjunction → `üstəgəl`
- the `o vaxt / o an / o zaman … ki` frame for «тогда…, когда», three pages —
  Azerbaijani puts it in a participle: `…mümkün olmayanda qazandırır`
- `Studiya haqqında rəqəmlərlə` for «Студия в цифрах»
- double ablative `beş dəqiqədən otuz saniyədən aşağıya`
- second-person-singular `öz modelin` in a text that addresses on formal `siz`

**English had none of the named markers.** No delve, leverage, robust,
seamless, "not just X, it's Y", no closing "Ultimately" paragraph anywhere.
What was there was the same family one register down — `one of our core
directions`, `the key functions`, `decisions at the key forks`, `a bespoke
model`.

**English is British.** The six service pages were written British and the
landing page American, and FLEKS said `psychology center` in its visible title
and `psychology centre` in its own SEO description. Normalised to British in
`724b926`: catalogue, centre, behaviour, specialised, optimisation, licence.

---

## 5. Decisions taken 2026-08-05

### Delivery timelines were compressed

The landing FAQ and the service pages disagreed on two of four categories. The
client confirmed **the landing figures are the real ones** and asked for
everything to come down with them, proportions kept (`63d64d9`):

| | before | now |
| --- | --- | --- |
| landing page | 1–2 weeks | **3–5 days** |
| corporate site | 3–6 weeks | **1–2 weeks** |
| catalogue / multilingual portal | 6–10 weeks | **3–5 weeks** |
| simple store | 4–6 weeks | **2–4 weeks** |
| full commerce platform | 8–12 weeks | **4–6 weeks** |
| CRM / ERP | 4–8 weeks | **2–4 weeks** |
| complex platform | 2–4 months | **1–2 months** |
| mobile MVP | 6–10 weeks | **3–5 weeks** |
| full mobile product | 3–5 months | **2–3 months** |
| store submission | 1–2 weeks | **1 week** |
| one integration | 1–2 weeks | **3–5 days** |
| automation package | 3–6 weeks | **1–3 weeks** |
| scripted bot | 2–3 weeks | **1–2 weeks** |
| LLM assistant | 4–8 weeks | **2–4 weeks** |

**Two durations are deliberately not build time and did not move:** the free
estimate is 3–5 days and the warranty is 3 months. The first timeline stage on
every page *is* the estimate, so it still reads 3–5 days; only the stages after
it were recomputed, and they now sum to the new headline figure on each page
rather than being scaled blindly. If you change a headline figure again, redo
that sum — `facts`, `lead`, `timeline[].time`, the FAQ answers and the numeric
part of `meta.description` all carry it, in three languages.

Note `MVP за 7–14 дней` in the landing hero and `mobile MVP 3–5 weeks` are
different things — a generic first working version against a mobile app.

### Eight process promises, approved

Written for the FAQ page and true site-wide:

1. one responsible person is the single point of contact
2. NDA is signed before the brief and covers the estimate stage
3. payment is per stage, each stage paid after something you can look at
4. access to every service is handed over, not just the code
5. no technology nobody in Baku could maintain after us
6. no fee for handing the project to another team
7. hosting is not resold and carries no markup
8. the warranty starts on release day

---

## 6. Findings no automated check catches

Every one of these passed `shots.mjs` — clean contrast, no overflow, tap
targets fine — and was still wrong.

**CSS `text-transform: uppercase` follows the document language.** On the az
page it applies Azerbaijani casing, so `.mono` turned "Mobile" into
**MOBİLE**. Any uppercased English string on the az page needs `lang="en"`;
see `Tech.astro`. Russian is not Turkic-cased.

**satori has no document language**, so its own `textTransform: uppercase` is
locale-invariant and produced `BƏRI` instead of `BƏRİ` on the OG cards. Cased
explicitly per locale in `src/pages/og/[key].png.ts`.

**A trailing em dash in `titleMuted` wraps to the start of the next line.**
Use a non-breaking space before it: `'…  —'`. All service titles do. The same
applies inside a phrase: `«лид — звонок — сделка»` split across lines and left
a dash starting a line until the dashes were bound with nbsp.

**A number range breaks across lines.** `Первая рабочая версия за 7–14 дней`
split between `7–` and `14` at 390px. Short second clauses avoid it; check the
h1 at 390 after any change.

**One stray Cyrillic character pulls a whole font subset.** `Tип` — Latin T,
Cyrillic и and п — sat in the az bots-ai copy and was the only Cyrillic on any
Azerbaijani page. A scan for tokens mixing scripts is worth re-running after
any bulk copy edit.

**Alt text written from case descriptions is fiction.** Two separate rounds of
this. Every one of the fifteen case screenshots has now been opened and
compared with its alt in all three locales:

- Smart Fashion 2 and 3 held each other's text — `website/3.jpg` is the cart,
  `website/4.jpg` is the home page with the lookbook
- FLEKS 2 and 3 held each other's text — `photo_2` is the financial report
  screen, `photo_3` is the client list
- MindTrick 1 omitted the red "You missed Wednesday twice this month" note,
  which is the insight the case is built on
- Merkuri 3 omitted the invalid-format flag and the recent-declarations list
- CRM Portal 3 promised "deals by stage" where the board holds four columns
  counting 3, 1, 2 and 1 and exactly one visible card

**A metric can be inverted and still look plausible.** The az FLEKS result
read `3 dəq əvəzinə 30`, which means "thirty instead of three minutes". ru and
en were right. When a value carries a comparison, read it out loud.

**Screenshot crops need looking at, not calculating.** Narrow viewports get a
1:1 detail crop (`crop: [renderWidth, left, top]` in `src/data/cases.ts`). Two
retunes were needed because a crop tuned for a client card landed on an empty
part of a Kanban board.

**`sizes` must state the rendered width, not the viewport.** Below 640 the
hero and case gallery render at a fixed crop width; left at `100vw` the browser
picks a candidate narrower than the pixels it paints.

**Element screenshots include the sticky header** floating mid-image. Capture
artifact, not a layout bug. Do not "fix" it.

**1024 is where two-column sections break** — and 768 for anything with a
seven-column block. Check both explicitly, every time.

**`shots.mjs` captures `<details>` closed, so accordion answers are never
audited.** The landing FAQ, the six service FAQs and the FAQ page all pass the
harness without a single answer having been measured for overflow or contrast.
Open them first — set `d.open = true` on every `details`, add `is-in` to every
`[data-reveal]`, then run the same checks. The FAQ page was verified that way
across 36 viewport/theme/locale combinations; answers measure 5.05:1 light and
6.29:1 dark, which is `--fg-muted` exactly.

**`shots.mjs` takes label, selector and path positionally, and an empty path
argument silently captures the home page.** `node scripts/shots.mjs a "" ""`
reports "clean across all viewports" for a page you never looked at. zsh does
not word-split unquoted expansions, so `for x in "label /path"; set -- $x`
passes the whole string as the label — which then lands in `.shots/label%20/`.
If the output directory name looks odd, the run was wrong. Check the file
mtimes before trusting any screenshot.

**Capital schwa looks lowercase and is not.** `Ə` (U+018F) in JetBrains Mono is
a rotated *e* drawn at cap height, so in a downscaled screenshot `İŞ VƏ
MÜQAVİLƏ` reads as `İŞ Və MÜQAVİLə` and looks like a broken
`text-transform`. It measures at cap height (ascent 9.14 against `E` at 9.02
and `ə` at 6.92), and the transformed string renders identically to hand-typed
caps. Measure before "fixing" it.

**A third grey fails contrast.** `--fg-faint` measured 2.73:1 and was deleted.
There are exactly two text levels.

**A portrait screenshot in a landscape frame shows a slice of nothing.**
`ServicePage` reads `media.shape` and `media.fit`; `ai-assistent` ships
`shots: []` and draws the `CaseChat` mockup, so any new component rendering
case media must handle the empty array.

**A service with exactly one relevant case** gets a single-column grid capped
at 40rem, or the lone card reads as a missing second one.

---

## 7. Remaining before launch

1. **Profile the service pages and the FAQ page** — Core Web Vitals and gzip
   size. Only the landing page has been measured.
2. **Cutover to Cloudflare Pages.** Set the build environment (§8), deploy,
   then delete the legacy files and turn off GitHub Pages.
3. **Delete the legacy site** — `index.html`, `style_dark.css`,
   `style_light.css`, `translations.js` and the root `pics/`. Still present
   because GitHub Pages serves them. `translations.js` is also the source of
   the client's original copy, so check anything you still need out of it
   first. It misspells **MindTrack**; the product is **MindTrick**.
4. **Run `validator.schema.org` by URL** once the site is public (§3).

### The full FAQ page — done 2026-08-05

Routes `/faq/`, `/ru/faq/`, `/en/faq/`, one slug in all three languages, so it
needs no `alternates` record. Copy in `src/i18n/faq.ts`, skeleton in
`FaqFull.astro`, three ~20-line route files.

**Thirty questions in each language, in six blocks** — and the three sets are
not the same thirty. Nine questions exist in only one language, because each
audience asks different things:

| | Only in that language | Why |
| --- | --- | --- |
| az | working outside Baku; payment in manat by invoice; whether `ə ğ ı İ` survive search, sorting and PDFs; whether non-technical staff will cope | what a Baku SMB actually asks |
| ru | who fills the system with content; a system in Russian *and* Azerbaijani | the bilingual office, not the bilingual encoding |
| en | time zones and working language; IP assigned in writing; data jurisdiction; taking maintenance in-house | what an offshore buyer asks |

The az `ə ğ ı İ` question and the ru two-languages question look adjacent and
are not: one is about encoding, sorting and PDF output, the other about two
sets of texts and a switcher. Do not merge them.

The answers deliberately do **not** restate the per-service durations; the
"how long" question points at the service pages instead. Keep that — it stops
the FAQ from becoming a fourth place a duration has to be corrected.

Every question rests on a fact already shipped elsewhere: the `excludes` lists,
the migration stage on the CRM/ERP page, the eight process promises (§5). The
FAQ introduces no promise the rest of the site does not already make.

**The heading spells the count as a word** ("Тридцать вопросов", "Otuz sual,",
"Thirty questions,"), which cannot be computed in three languages. `FaqPage`
therefore carries a numeric `questionCount`, and `FaqFull.astro` throws at
build time when it disagrees with the array. Add a question, and the build
tells you the heading is now lying.

Two questions that already live on a service page were **left off on purpose**
— "what if the service has no API?" (integrations) and "will data be lost?"
(CRM/ERP). Repeating them here would make a third place to correct.

### Debt carried deliberately

- **Two `sameAs` fields are empty on purpose.** LinkedIn is commented out in
  `src/data/org.ts` — the client is creating the page. A `sameAs` asserts
  control of a URL, so a guessed one is worse than a missing one.
- **The address is city-level.** `ADDRESS` has locality and country only, and
  `GEO` is the centre of Baku.
- **Turnstile is a stub.** The slot renders empty until `TURNSTILE_SITE_KEY`
  is set; wiring the widget and its server-side verification is a deploy-step
  task.
- **Four of the nine service categories have no page** — web apps and
  platforms, analytics and accounting, specialised solutions, modernisation
  and support. Not planned; they keep the `#services` anchor.
- **Astro emits the original file for every imported image** — 15 files,
  ~2 MB in `dist/_astro`, none referenced. Vite emits on import, not on
  reference. Unavoidable while using `astro:assets`; the client accepted it.

---

## 8. Architecture worth knowing before you touch it

**Copy lives in `src/i18n`, never in components.** `az.ts` / `ru.ts` / `en.ts`
for the landing page and cases; `src/i18n/services/<key>.ts` for each service
page, exporting `Record<Locale, ServiceCopy>`; `src/i18n/faq.ts` for the FAQ
page that does not exist yet. The `ServiceCopy` type in `services/types.ts` is
deliberately demanding — a half-written page will not compile.

**Service pages are written three times, not translated once.** Each language
argues differently because each is chasing different queries.

**Adding a service page is four steps:** a route entry in
`src/data/services.ts` with the slug for each locale; a copy file; three
~20-line page files passing `alternates`, `faq`, `ogKey` and
`schemaKind="service"` to `Base`; one line in the `serviceCopy` map in
`src/pages/og/[key].png.ts`. The sitemap and footer pick it up on their own.

**Per-locale slugs break the site's usual routing assumption.** Everywhere
else a route is one locale-free path plus a prefix. Service pages pass an
explicit `alternates` record through `Base`, `Header` and `Footer`. Without it
the language switcher sends a Russian reader to `/ru/xidmetler/…` and a 404.
**The FAQ page uses the same slug in all three languages, so it does not need
this** — `/faq/`, `/ru/faq/`, `/en/faq/`.

**The footer keeps itself current.** `serviceForCategory()` maps a
landing-page category to its page; linked categories sort first. Adding
`categoryIndex` to a route is the whole of the work.

**Numbers in copy describe the data, never the reverse.** `{tech}` resolves
from `techCats` at build time, `{years}` and `{now}` from `FOUNDED` and the
build date, all through `fill()`. If a figure and a list can disagree, compute
it.

**The inverted section re-derives role tokens.** `.invert` in `tokens.css`
rebinds `--fg-muted`, `--line` and friends to the opposite theme's formulas.

**Trailing slashes are load-bearing.** Cloudflare 308s `/ru` to `/ru/`, so
`localePath()` always ends in a slash and Astro is set to
`trailingSlash: 'always'`.

**Localised 404s.** Cloudflare walks up from the requested path looking for
`404.html`. An `astro:build:done` hook in `astro.config.mjs` copies the
localised ones to the sibling path that walk expects.

**Stylesheets are inlined** (`inlineStylesheets: 'always'`). Two external
files at ~3.7 kB gzip were costing a render-blocking round trip each.

**The hero image is preloaded from a shared config.** `HERO_IMAGE` in
`data/cases.ts` is used by both `Hero.astro` and the preload in `Base.astro`.

**satori cannot read the site's fonts directly.** They are variable woff2 and
its opentype.js fork dies on `fvar`. `src/lib/instance-font.ts` pins them to a
single weight using the hb-subset wasm inside `harfbuzzjs`.

**Astro scoped styles do not reach child components.** Shared motion utilities
live in `src/styles/base.css` (`.anim`, `.anim-lift`). The same trap applies to
grid placement on a child's root — wrap it in a div you own.

**`<picture>` is removed from layout** with `display: contents`, so the frame
rules that size the `<img>` keep addressing it directly.

---

## 9. Build environment

Two variables, read in `BriefForm.astro` frontmatter at build time. Neither is
committed; `.env` is gitignored and `.env.example` documents the shape. Set
both in the Cloudflare Pages build environment at cutover.

| Variable | Effect when unset |
| --- | --- |
| `FORMSPREE_ID` | the form renders with an empty `action`, the submit script does not arm itself, and the build logs a warning. The mailto path under the button still works. |
| `TURNSTILE_SITE_KEY` | the `.brief-turnstile` slot renders empty and collapses. **This is the deploy-step stub.** |

The id is the part after `/f/` in the Formspree endpoint. The legacy
`index.html` still carries it inline; it is already in git history, so treat it
as known rather than secret and rotate it if that matters.

`git` has no global identity here. Commit with
`-c user.name="Texa" -c user.email="texranhamidzada@gmail.com"`.
