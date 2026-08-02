# HANDOFF — EXCLAMATION redesign

Written 2026-08-02 for an agent picking this up cold. The site is being
rewritten from scratch on Astro. The first screen and five sections are done;
the rest of the landing page is not.

---

## 1. What this session did

Three commits, on `main`, on top of the old static site.

| Commit | Contents |
| --- | --- |
| `4a23447` | Astro skeleton + rebuilt first screen (az/ru/en) |
| `b9260de` | Sections 02–04: services index, why, metrics band |
| `40f7cfb` | Sections 05–06: work index, six case pages, process |
| `7f5ab8f` | Sections 07–08: tech (the one inverted band), facts |

**Stack decisions.** Astro `output: 'static'`, plain CSS with `@layer` and
custom properties, no Tailwind, no React. Locale routing: `az` at `/`, `ru`
and `en` prefixed. 21 pages build today (3 home + 18 case pages).

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
`why`, `work`, `metrics`, `process`, `tech`, `facts`.

1. **`faq`** — single-column accordion, eight questions, content in
   `translations.js` under `faqItems`. Prices contain `₼` — check it renders
   from Commissioner and not a fallback.
2. **`contact`** — 5 + 7 columns with the form. Formspree endpoint
   `https://formspree.io/f/mdayvkzp`, progressive enhancement via
   `@formspree/ajax`. **Inputs must be ≥16px** or Safari zooms on focus.
   Contacts: `tel:+994706565909`, `info@exclamationdev.com`,
   `t.me/exclamationdev`, `wa.me/994702054171`.
3. **`finalcta`** — the square dot that terminates the exclamation mark the
   spine draws down the page. This is the payoff of the whole signature; do
   not make it a generic CTA band.
4. **Footer** — the case pages currently have no footer. It arrives with the
   contact batch and must be added to `Base.astro` so every route has it.
5. **404 page** — required, not built.
6. **Cutover** — Cloudflare Pages, then delete the legacy files above and
   turn off GitHub Pages.

Also outstanding: the reviews component is supposed to exist as a placeholder
(three fake testimonials were removed from the old site and must not return),
and `astro:assets` image optimisation was skipped — the `sharp` postinstall
was blocked by npm, so images ship as-is.

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

Then: `npm install && npm run build && npm run preview`, open
`http://localhost:4321`, and look at it in both themes and all three
languages before touching anything.
