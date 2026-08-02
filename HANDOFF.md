# HANDOFF — EXCLAMATION redesign

Written 2026-08-02 for an agent picking this up cold. The site is being
rewritten from scratch on Astro. Every section of the landing page is built;
what remains is the cutover. See §7 for what is genuinely unfinished.

---

## 1. What this session did

Six commits, on `main`, on top of the old static site.

| Commit | Contents |
| --- | --- |
| `4a23447` | Astro skeleton + rebuilt first screen (az/ru/en) |
| `b9260de` | Sections 02–04: services index, why, metrics band |
| `40f7cfb` | Sections 05–06: work index, six case pages, process |
| `7f5ab8f` | Sections 07–08: tech (the one inverted band), facts |
| `cb0b788` | Sections 09–10 plus the footer: faq, contact |
| `2283e82` | Section 11 plus 404: finalcta, the terminating dot |

**Stack decisions.** Astro `output: 'static'`, plain CSS with `@layer` and
custom properties, no Tailwind, no React. Locale routing: `az` at `/`, `ru`
and `en` prefixed. 24 pages build today (3 home + 18 case + 3 404).

**Design system.** Approved by the art director before any section beyond the
first screen was built, and written down in
`.claude/skills/exclamation-design/SKILL.md`. Six colour hex, three type
families, four spacing steps, the diff-spine signature, motion parameters,
the bans. **Read it before writing any CSS.** It is the contract — if a value
is not in it, it does not exist yet.

**Fonts are self-hosted** in `public/fonts` (Geologica, Commissioner, JetBrains
Mono), split into `latin` / `latin-ext` / `cyrillic` by `unicode-range`. Glyph
coverage for Azerbaijani schwa (`ə`/`Ə`) and the manat sign (`₼`) was verified
against the `cmap` table and again in the browser. Commissioner sits inside
`--font-mono` on purpose: JetBrains Mono has no `₼`.

**Studio age is computed.** `FOUNDED = 2019` in `src/i18n/index.ts`; copy
carries `{year}` / `{years}` and goes through `fill()`. The old site said
"since 2019" and "6 years" at the same time.

**Two verification scripts**, both worth keeping:

```bash
node scripts/shots.mjs <label> [selector] [path]   # 6 widths x 2 themes + audits
node scripts/motion-check.mjs                      # proves reduced-motion fires
```

`shots.mjs` fails on horizontal overflow, text under 4.5:1, and tap targets
under 44px. It writes to `.shots/<label>/` (gitignored). Run the preview
server first: `npm run build && npm run preview`.

---

## 2. Uncommitted changes

**None.** `git status` is clean.

Two things are deliberately still in the repo and not yet removed:

- **`index.html`, `style_dark.css`, `style_light.css`, `translations.js`** —
  the old static site. It is still what GitHub Pages serves, so deleting it
  now would take the live site down. It is also the source of the client's
  copy: the services taxonomy, case task/solution text and results were
  pulled out of `translations.js` verbatim. Delete only when the new site is
  complete and Cloudflare Pages is live.
- **`pics/`** at the repo root — duplicated into `public/pics/` because Astro
  only serves from `public/`. Remove the root copy at the same time.

`.shots/` is gitignored screenshot output. Safe to delete anytime.

---

## 3. What is next, in order

The section order is fixed in SKILL.md §3 and must not be reshuffled: no two
adjacent sections may share a skeleton. Built so far: `hero`, `services`,
`why`, `work`, `metrics`, `process`, `tech`, `facts`, `faq`, `contact`, and
the footer (in `Base.astro`, so every route has it).

Every section in the approved order is built. What remains:

1. **Cutover** — Cloudflare Pages, then delete the legacy files above and
   turn off GitHub Pages. See §6 for the build environment variables and §7
   for what has to be decided or fixed at the same time.

Deferred by the client, not forgotten: a full **`/faq/` page** of 25–30
questions. The eight on the home page stay as they are; the page is a
separate task.

### Known debt, carried deliberately

- **Footer service links point at one anchor.** Six labels, all `#services`,
  because there are no per-service routes. Temporary until service pages
  exist; the labels are kept because they are useful scanning targets.
  Six of the nine categories is a deliberate choice, not a truncation bug.
- **Nothing here about the spine any more.** It terminates on every route:
  `SpineEnd.astro` sits in `Base.astro` above the footer and owns the dot.
  `finalcta` is now only the landing page's closing call.

**Working agreement with the art director:** show two or three sections at a
time, never one. Before showing anything, run the six widths in both themes
yourself and fix what you find. Do not report "done" off a green build.

---

## 4. Traps already hit — do not repeat

**Screenshot crops.** Desktop UI scaled to 280px wide is unreadable, so narrow
viewports get a 1:1 detail crop positioned onto a meaningful region
(`crop: [renderWidth, left, top]` in `src/data/cases.ts`). The offsets are per
case and, where the content sits elsewhere, per screenshot (`Shot.crop`). Two
retunes were needed because a crop tuned for a client card landed on an empty
part of a Kanban board. **Always look at the resulting screenshot** — the
numbers alone tell you nothing.

**`loading="lazy"` vs the harness.** The first work-section run produced three
blank thumbnails: images below the fold had not decoded when the screenshot
was taken. `shots.mjs` now scrolls the whole page and awaits every image
before capturing. If you add a capture path of your own, keep that step, or
you will show the client empty frames.

**Alt text written from case descriptions is fiction.** Fifteen alts were
written from the copy and were wrong for three screens: `crm/screen2` is the
property database (not the Kanban), `crm/screen3` is the Kanban, and
`merk/screen.png` is the partners-and-brokers catalogue (not cargo details).
**Open every image and describe what is actually on it.**

**MindTrick, not MindTrack.** The legacy `translations.js` misspells it in all
three locales. The app screenshots say MindTrick. Already fixed in
`src/i18n/*.ts`; if you copy anything else out of `translations.js`, re-check
product names against the screenshots.

**Image dimensions.** Every case image had `width="1600" height="1280"`
hardcoded while the real files run from 566×1280 to 1280×284. Real sizes now
live in `src/data/cases.ts`. Wrong intrinsic sizes cause layout shift and
break `object-fit`.

**Astro scoped styles do not reach child components.** The hero's diff block
stopped animating when it was extracted into `Diff.astro`, because the
keyframes lived in the parent's scoped `<style>`. Shared motion utilities are
now in `src/styles/base.css` (`.anim`, `.anim-lift`). Same trap applies to any
grid placement you try to apply to a child component's root — wrap it in a
div you own.

**Numbers in copy describe the data, never the reverse.** The metrics band
said "40+ technologies" while the list held 38. It now carries `{tech}`, which
`fill()` resolves from `techCats` in `src/data/tech.ts` at build time — trim
two entries and the band reads 38 on its own. Same for `{years}` and `{now}`.
If a figure and a list can disagree, compute the figure.

**CSS `text-transform: uppercase` follows the document language.** On the az
page it applies Azerbaijani casing, so `.mono` turned the English category
names "Mobile" and "AI / Integrations" into **MOBİLE** and **INTEGRATİONS**.
Correct for real Azerbaijani words (`Ritm` → `RİTM` is right), wrong for
product names. Any uppercased English string on the az page needs `lang="en"`
on its element — see `Tech.astro`.

**The inverted section needs the opposite theme's role tokens, not just
`--bg-invert`.** `--fg-muted` and `--line` are mixes *against the ground*;
left unflipped on `--bg-invert` they land near 1.5:1. `tokens.css` now has an
`.invert` block that re-binds the whole role set for both themes, so
components keep writing `--fg-muted` and get 6.29:1 (light page) / 5.05:1
(dark page). Measured on the live page, both directions.

**A solid section background paints over the spine.** The spine lives in one
absolutely-positioned `.spine-wrap` on `.page`, behind sections. `Tech.astro`
redraws it inside its own ground, in the inverted `--line`; both land at the
same x (144 at 1440), so the stroke stays unbroken. Any future full-bleed
section with a background must do the same.

**A third grey fails contrast.** `--fg-faint` measured 2.73:1 and was deleted.
There are exactly two text levels. Recede with size, weight or strike-through,
never with less contrast.

**1024 is where two-column sections break.** The services rows squeezed the
item list into a rag; the three-column row now only turns on at 1200. Check
768–1024 explicitly, every time.

**Element screenshots include the sticky header** floating mid-image. That is
a capture artifact, not a layout bug. Do not "fix" it.

**Playwright MCP screenshots go nowhere useful** in this environment — the
files did not land in a readable path. Use `scripts/shots.mjs` (real
Playwright, installed as a devDependency) or the chrome-devtools MCP, which
returns the image inline.

**git has no global identity here.** Commits were made with
`-c user.name="Texa" -c user.email="texranhamidzada@gmail.com"`, matching the
repo's existing history. Do the same or ask.

---

## 5. Read these first

In this order:

1. **`.claude/skills/exclamation-design/SKILL.md`** — the design contract.
   Everything below only makes sense after this.
2. **`src/styles/tokens.css`** — the six hex, the role tokens, both themes,
   the type and spacing scales. Nothing else defines a colour.
3. **`src/layouts/Base.astro`** — head, canonical/hreflang, the no-FOUC theme
   script, the spine, the scroll-reveal observer.
4. **`src/components/Hero.astro`** + **`src/components/Diff.astro`** — the
   first screen and the signature element. The diff appears in exactly three
   places: the hero and the top of each case page.
5. **`src/i18n/index.ts`**, then one of `az.ts` / `ru.ts` / `en.ts` — the shape
   of every section's copy. All three locales ship together; a section is not
   done until its copy exists in all three. Azerbaijani breaks layouts first,
   its words are longest.
6. **`src/data/cases.ts`** — screenshots, real pixel sizes, crops. Joined to
   the locale dictionaries by `slug`.
7. **`src/components/Services.astro`** and **`Why.astro`** — the two section
   archetypes to imitate: sticky two-column dense, and typography-only sparse.
8. **`scripts/shots.mjs`** — what "checked" means here.

Then: `cp .env.example .env`, fill it in (see below), then
`npm install && npm run build && npm run preview`, open
`http://localhost:4321`, and look at it in both themes and all three
languages before touching anything.

---

## 6. Build environment

Two variables, read in `Contact.astro` frontmatter at build time. Neither is
committed; `.env` is gitignored and `.env.example` documents the shape. Set
both in the Cloudflare Pages build environment at cutover.

| Variable | Effect when unset |
| --- | --- |
| `FORMSPREE_ID` | form renders with an empty `action`, the submit script does not arm itself, and the build logs a warning. The mailto path under the button still works. |
| `TURNSTILE_SITE_KEY` | the `.brief-turnstile` slot renders empty and collapses. **This is the deploy-step stub** — add the widget script and the server-side verification here. |

The id is the part after `/f/` in the Formspree endpoint. Note the legacy
`index.html` still carries the endpoint inline; that disappears when the old
site is deleted at cutover, but it is already in git history, so treat the id
as known rather than secret and rotate it if that matters.

The form is progressively enhanced with about thirty lines of `fetch`, not
`@formspree/ajax` — the site has no runtime dependencies and this keeps it
that way. Without JS the form posts natively and Formspree renders its own
confirmation page.

---

## 7. What is not finished

Written by the agent that built sections 07–11, listing what it considers
genuinely outstanding rather than what the plan happens to say. Nothing here
blocks review; several items block launch.

**Blocks launch**

- **Turnstile is a stub.** The slot renders and nothing mounts in it. Until
  the widget and its server-side verification exist, the only spam defence on
  the form is the `_gotcha` honeypot, which stops bots and nothing else.
- **No `sitemap.xml`, no `robots.txt`.** Neither is generated.
- **`CLOUDFLARE_DEPLOY_HOOK` is not set.** The weekly rebuild builds and
  verifies but deploys nothing until that repository secret exists.

**Degrades quality, does not block**

- **Fifteen unused originals ship in `dist/_astro`.** Astro emits the source
  file for every imported image even when only the generated variants are
  referenced. About 2.1 MB, never downloaded by a visitor, but it does pad
  the deploy.

**Open decisions, not defects**

- **Navigation lists four of eleven sections** (services, process, work,
  contact). `tech`, `facts` and `faq` are reachable only by scrolling.
- **No analytics of any kind** is installed.
- **No print stylesheet.** Decided against.
- **No testimonials section, by decision.** Three fake ones were removed from
  the old site. Nothing goes back until there are two real quotes with a name
  and a company attached; no placeholder in the meantime.

---

## 8. Build-time generation

Three things are produced during `astro build` rather than checked in.

**Images.** `src/assets/pics` goes through `<Picture>`: avif with a webp
fallback, four widths each. Anything under `public/` is copied through
untouched, which is why the screenshots do not live there any more. On the
cropped views — the hero below 640 and the case galleries — `sizes` states the
crop width, not `100vw`: those render at a fixed pixel width and slide under
the frame, so a viewport-based `sizes` makes the browser pick a candidate
narrower than the pixels it paints, and the crop goes soft.

**Open Graph cards.** `src/pages/og/[key].png.ts`, satori to SVG, sharp to
PNG, 24 cards: `home-<locale>`, `page-<locale>` and `case-<slug>-<locale>`.
Pages choose one with the `ogKey` prop on `Base.astro`; `page` is the default
and is what the 404 uses, and it is where service pages should point when they
exist. Two traps are already paid for:

- satori cannot read the site's woff2 — they are variable fonts and its
  opentype.js fork dies on `fvar`, because the subsetter dropped the `name`
  records that table points at. `src/lib/instance-font.ts` pins each face to
  one weight with the hb-subset wasm inside harfbuzzjs. Stripping `fvar`
  instead "works" but leaves the default master, which for Geologica is
  wght=100 — every heading renders Thin.
- the locale subsets do not overlap. `latin-ext` carries `ə ğ ı ş`, not
  `A–Z`. Registering the locale face and the latin face under the same family
  name gives you tofu for the basic alphabet, because satori matches a family
  and stops. They need distinct names and a `'Locale, Latin'` stack.

**Localised 404s.** Astro only special-cases the root `404.astro`; the other
two build to `ru/404/index.html`, which Cloudflare's error-page lookup never
finds. The `localised-404` integration in `astro.config.mjs` copies each to
the sibling `404.html` that lookup expects.

Verified against the real Pages runtime with `npx wrangler pages dev dist` —
`/ru/no-such-page` and `/ru/is/nope` both answer 404 in Russian, `/en/...` in
English, everything else in Azerbaijani. That is the Cloudflare worker running
locally, not a preview deploy on their infrastructure; re-check once the
project is actually connected.
