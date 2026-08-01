---
name: exclamation-design
description: The approved design system for the EXCLAMATION site — colour tokens, type, spacing, motion, the diff-spine signature, and the hard bans. Load before building or editing any section, component, or case page so a new section matches the ones already shipped without asking the art director.
---

# EXCLAMATION — design system

Approved 2026-08-02. This file is the contract. If a value you need is not
here, it does not exist yet: pick the nearest token, or raise it as a
decision — do **not** invent a new hex, a new spacing value, or a new
shadow. The failure mode this document prevents is a seventh grey.

Stack: Astro static, plain CSS with `@layer` and custom properties.
No Tailwind. No React. Tokens live in `src/styles/tokens.css`, primitives
in `src/styles/base.css`, per-component CSS in each `.astro` file's
`<style>` block (unlayered, so it wins over the global layers).

---

## 1. Colour — six named hex, no others

```css
--ink:    #0B0E11;  /* deep ground: dark-theme background, light-theme text */
--slate:  #161A1F;  /* the only raised surface in dark */
--bone:   #E8E6E0;  /* light-theme background, dark-theme text */
--ash:    #8B949E;  /* muted text in dark only */
--signal: #FF4A1E;  /* accent: fills, bars, marks */
--ember:  #B32E0A;  /* the same accent, darkened for text on light */
```

Everything else is a **role token** derived from those six by `color-mix`.
Use role tokens in components; never reach for a raw palette name except
inside `tokens.css`.

| Role | Light | Dark | Use for |
| --- | --- | --- | --- |
| `--bg` | bone | ink | page ground |
| `--bg-raised` | bone→white 45% | slate | screenshot frames, inset panels |
| `--bg-invert` | ink | bone | the one inverted section |
| `--fg` | ink | bone | primary text |
| `--fg-invert` | bone | ink | text on `--bg-invert` |
| `--fg-muted` | ink 62% on bone | ash | secondary text, line numbers, idle nav |
| `--line` | ink 14% | bone 14% | hairlines, borders, the spine |
| `--line-strong` | ink 28% | bone 26% | strike-through, emphasised rules |
| `--accent` | ember | signal | accent **text** and icons |
| `--accent-flat` | signal | signal | accent **fills** (buttons, bars) |
| `--accent-wash` | signal 14% | signal 18% | selection, in-paragraph highlight |
| `--on-accent` | ink | ink | text sitting on `--accent-flat` |

**There are exactly two text levels: `--fg` and `--fg-muted`.** A third,
fainter grey was measured at 2.73:1 and removed. If something needs to
recede further, use size, weight, or strike-through — not less contrast.

### Measured contrast (recompute if you touch a token)

| Pair | Light | Dark |
| --- | --- | --- |
| `--fg` on `--bg` | 15.51 | 15.51 |
| `--fg-muted` on `--bg` | 5.05 | 6.29 |
| `--accent` on `--bg` | 5.08 | 5.76 |
| `--on-accent` on `--accent-flat` | 5.76 | 5.76 |

Floor is 4.5:1 for **all** text, including 60px headlines, line numbers,
captions and inactive language links. Verify in the browser, on the real
page, against the actually-computed background — not from the hex by eye.

### Accent budget: five appearances per viewport, maximum

Count what is visible at once. The brand mark, the spine's `+` marks, one
button, the focus ring, and one in-text highlight is already the full
budget. Colour in screenshots does not count — that colour belongs to the
client's product, which is exactly why the frame around it stays neutral.

### Themes

Light is the default; dark is equal, not a variant. One variable set,
switched three ways in this order: `prefers-color-scheme` for the default,
`:root[data-theme]` to override it, `localStorage['exclamation-theme']` to
persist the override. The inline script in `Base.astro` sets the attribute
before first paint — keep it inline and keep it first.

---

## 2. Type — three families, verified glyph coverage

```css
--font-display: 'Geologica', system-ui, sans-serif;
--font-text:    'Commissioner', system-ui, sans-serif;
--font-mono:    'JetBrains Mono', 'Commissioner', ui-monospace, monospace;
```

Self-hosted woff2 in `public/fonts`, split into `latin` / `latin-ext` /
`cyrillic` with `unicode-range`, declared in `src/styles/fonts.css`. The
Cyrillic file is never fetched on the Azerbaijani page — do not collapse
the subsets into one file.

**`Commissioner` sits inside `--font-mono` on purpose.** JetBrains Mono has
no manat sign (U+20BC). Any price rendered in the mono stack resolves that
one glyph to Commissioner, which does have it. Never drop that fallback,
and never set a mono `font-family` by hand without it.

Coverage was verified against the `cmap` table and again in the browser by
canvas measurement, for `ə Ə ğ Ğ ı İ ş Ş ö ü ç` and full Cyrillic. If you
ever swap a family, re-run both checks — a declared `latin-ext` subset is
not evidence that schwa is drawn. Banned regardless of coverage: Inter,
Poppins, Montserrat, Roboto, Open Sans.

### Weights

| Where | Family | Weight |
| --- | --- | --- |
| Hero headline (first screen only) | display | 700 |
| Every other heading, at any size | display | 300 or 400 |
| Section headings, two-tone | display | first clause `--fg-muted`, second `--fg` |
| Buttons, nav, menu | display | 400–500 |
| Body copy | text | 400 |
| Eyebrows, labels, numbers, diff | mono | 400, `+` rows 600 |

Large type reads as a quiet grotesque here, not a poster. 700 anywhere
below the hero is a mistake.

### Scale

```css
--fs-100: clamp(0.6875rem, 0.66rem + 0.14vw, 0.8125rem);  /* mono labels  */
--fs-200: clamp(0.8125rem, 0.79rem + 0.12vw, 0.9375rem);  /* small, nav   */
--fs-300: clamp(0.9375rem, 0.91rem + 0.14vw, 1.0625rem);  /* body         */
--fs-400: clamp(1.0625rem, 1rem + 0.3vw, 1.25rem);        /* lead         */
--fs-500: clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem);       /* sub-heading  */
--fs-600: clamp(1.625rem, 1.3rem + 1.6vw, 2.75rem);       /* section h2   */
--fs-700: clamp(2rem, 1.5rem + 2.5vw, 3.75rem);           /* big statement*/
--fs-800: clamp(2.25rem, 1.5rem + 3.6vw, 3.75rem);        /* hero h1      */
```

Headings: `line-height: 1.02`, `letter-spacing: -0.03em` (hero `-0.045em`),
`text-wrap: balance`. Body: `line-height: 1.6`, measure capped at `42ch`
for lead paragraphs, `62ch` for running text.

Every figure the reader might compare — statistics, case metrics, prices,
table columns, diff line numbers — carries
`font-variant-numeric: tabular-nums`.

**Form inputs are `16px` minimum**, no exceptions: anything smaller makes
Safari zoom the page on focus.

---

## 3. Grid and rhythm

```css
--container: 1240px;
--gutter: clamp(1.25rem, 4vw, 3.5rem);
--rail: 0 → 3.5rem (≥768) → 5.5rem (≥1240);
```

`.shell` centres the container and applies the gutter. `.grid12` is four
columns below 768px and twelve above it. `--rail` is the left channel the
spine runs in; section content that should align to the spine gets
`padding-left: var(--rail)`.

### Vertical scale — four values, chosen by meaning

```css
--sp-block:   clamp(2rem,   4vw,  3rem);   /*  48 — inside a block          */
--sp-section: clamp(3.5rem, 7vw,  6rem);   /*  96 — between blocks          */
--sp-chapter: clamp(5rem,  11vw, 10rem);   /* 160 — between sections        */
--sp-major:   clamp(7rem,  15vw, 14rem);   /* 224 — before a change of tone */
```

Never type a raw margin above `2rem`. If a gap feels wrong, the boundary
is the wrong one, not the number.

### Section structure — no two sections repeat

The page alternates dense and sparse, and no section may copy its
neighbour's skeleton. The approved order:

1. `hero` — full-bleed, screenshot below the fold edge
2. `services` — two columns, left one sticky, dense
3. `why` — 7 columns offset, typography only, sparse
4. `work` — full-bleed images, dense
5. `metrics` — full-width band of figures, the page's one pause
6. `process` — five steps along the spine
7. `tech` — inverted full-bleed, dense
8. `facts` — three asymmetric blocks, sparse
9. `faq` — single column accordion
10. `contact` — 5 + 7 columns
11. `finalcta` — the square dot that ends the exclamation mark

Before writing a section, look at the one above it and pick a different
skeleton.

---

## 4. The signature: the diff spine

The whole page is one exclamation mark. A 1px `--line` rule runs the full
height in the left rail — that is the stroke — and the final CTA block is
the square dot beneath it. The rule tracks the **centred content column**,
not the viewport edge (see `.spine-wrap` / `.spine-shell` in `base.css`),
and is hidden below 768px where there is no rail.

The second expression is the diff block, and it appears in exactly **three
places on the whole site**: once in the hero, once at the top of each case
page. Nowhere else. Its shape:

```
 14 │ − Excel · WhatsApp · əl ilə hesabat
 15 │ + bir sistem · 2 həftəlik sprint
```

- mono, `--fs-200`, tabular numerals, `--line` rule down the left
- line numbers in `--fg-muted`, `--fs-100`, hidden below 480px
- `−` row: `--fg-muted`, `text-decoration: line-through` in `--line-strong`
- `+` row: `--fg`, `box-shadow: inset 2px 0 0 var(--accent-flat)`,
  the sign itself in `--accent`
- never red/green — removal reads through the strike, not through hue
- wraps below 560px, single-line above it; it must never be a line of text
  the reader can only reach by scrolling sideways

Content maps onto it directly: the old manual way on the `−` line, the
delivered system on the `+` line. Keep both under ~35 characters.

---

## 5. Motion

One orchestrated scene, on the first screen, once:

| Element | Delay | Duration |
| --- | --- | --- |
| spine draws (`scaleY` from top) | 0 | 420ms |
| eyebrow | 100ms | 420ms |
| headline lines (masked, `translateY(100%)`) | 140 / 210ms | 420ms |
| lead paragraph | 320ms | 420ms |
| diff rows | 360 / 400ms | 420ms |
| CTA | 440ms | 420ms |
| screenshot | 460ms | 420ms |

Everything else on the page is a scroll reveal: **8–12px of travel,
180–240ms**, easing `cubic-bezier(0.22, 0.61, 0.36, 1)` (`--ease`).
Hover states are honest and instant (140ms colour, no lift).

Banned: infinite loops, parallax, typewriters, counters that tick up,
anything that moves without the user asking.

Under `prefers-reduced-motion: reduce`: `animation-name` becomes a plain
`fade`, `animation-delay` becomes `0ms` — the screen arrives at once —
and `scroll-behavior: smooth` is switched off. Verify with
`node scripts/motion-check.mjs`, which fails if any element is displaced
or still running the motion keyframes.

---

## 6. Icons

One house set: 24×24 grid, `stroke-width: 1.5`, round caps and joins,
geometry limited to straight lines and 90° arcs. They live in
`src/components/Icon.astro`; add new ones there, never inline elsewhere.

**No emoji anywhere on the site, ever** — not in services, not in
advantages, not in contact channels, not as a bullet. If an icon would be
weak, drop it and let the typography carry the section.

---

## 7. Bans

- **No card with a shadow.** Structure comes from hairlines, background
  steps and whitespace. `box-shadow` is allowed only as the diff's
  `inset` accent bar.
- **No uniform 3×3 grids of equal cards** repeating section after section.
- **No decorative numbering** (01–09) on things that have no order. Numbers
  are for real sequences: process steps, diff lines, counts.
- **No stock laptops, phones in perspective, or gradient product mockups.**
  Screenshots are shown flat, at their own aspect ratio, in a `--bg-raised`
  frame with a 1px `--line` border and no radius.
- **No emoji.** See above.
- **No gradient blobs, glows or mesh backgrounds.**
- **No new hex, no new spacing value, no new grey.**

---

## 8. Screenshots of client work

Real screenshots from `public/pics` are the default; markup mockups only
where no screenshot exists or the real one is visually weak. Rules:

- every image needs a real `alt` describing what the screen shows, and a
  `<figcaption>` in mono naming the product and its domain
- desktop UI at narrow widths gets a **1:1 detail crop**, positioned to a
  legible region, not the whole interface scaled to thumbnail size; the
  full screen returns at ≥640px
- frame aspect: `4/3` mobile, `16/10` ≥640, `16/9` ≥1024

---

## 9. Accessibility floor — assumed, never announced in the UI

- visible `:focus-visible` on every interactive element: 2px `--accent`,
  3px offset
- tap targets ≥ 44×44 CSS px, including theme and language switches
- semantic landmarks, one `h1` per page, skip link first in the DOM
- the mobile menu is a native `<dialog>` opened with `showModal()` —
  focus trapping and Escape come from the platform; on close, focus
  returns to the trigger and `body` scroll is restored
- nothing important is reachable only on `:hover`
- `100dvh`, never `100vh`; `env(safe-area-inset-*)` on the page and on any
  fixed or full-height surface
- long lines and tables scroll inside their own container, never the page

---

## 10. Copy rules

- Azerbaijani is the primary language and lives at `/`; `/ru/` and `/en/`
  are prefixed. All three ship together — a section is not done until its
  copy exists in all three.
- The studio's age comes from `FOUNDED` in `src/i18n/index.ts`. Copy uses
  the `{year}` and `{years}` placeholders and is passed through `fill()`.
  Never type either number into a string.
- One primary CTA per screen. "Discuss the project" and "Get an estimate"
  led to the same form; only the first survives.
- Claims carry a number, a duration, or a tool name. "Individual approach"
  is not a claim.
- `localStorage` keys are prefixed `exclamation-`.

---

## 11. Checks before showing a section

Run the build, then verify — with your own eyes on the screenshots, not by
assuming the build passing means it looks right:

1. six widths — 320, 390, 768, 1024, 1440, 1920 — in **both** themes
2. all three locales; Azerbaijani is the one that breaks first, because
   its words are longest
3. `document.body.scrollWidth === document.documentElement.clientWidth`
   at 320
4. contrast of any new text pair, computed on the live page
5. keyboard pass: every new control reachable, focus ring visible
6. 768–1024 specifically — two-column sections and image grids fail there
   first
