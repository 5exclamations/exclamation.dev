---
name: exclamation-badge
description: Put the "DEVELOPED BY EXCLAMATION" attribution badge into a client product — a website, an app, a README, a deck. Load whenever a footer, an about screen or a credits line has to carry the studio's mark, so the same lockup and the same link go in every time without redrawing anything.
---

# EXCLAMATION — the attribution badge

One lockup, already drawn: `DEVELOPED BY ! EXCLAMATION`, linking to the
English home page. It is a built asset, not a thing to compose. Full
reference: `BADGE.md` in the `exclamation.dev` repo.

**Never retype the SVG.** The wordmark is glyph outlines; a model
reproducing them from memory produces a different badge, which is the one
failure this file exists to prevent. Copy the bytes with a shell command, or
point at the hosted URL.

## The one-line form — hosted image

Type this verbatim. Safe in JSX, Vue, Svelte, Markdown-in-HTML, anywhere.

```html
<a href="https://exclamationdev.com/en/?ref=badge" target="_blank" rel="noopener"><img src="https://exclamationdev.com/badge/exclamation-light.svg" alt="Developed by EXCLAMATION" width="316" height="24"></a>
```

Swap `-light` for `-dark` on a dark footer. `-auto` follows the viewer's OS
theme and is right only for products that do the same.

Markdown:

```markdown
[![Developed by EXCLAMATION](https://exclamationdev.com/badge/exclamation-light.svg)](https://exclamationdev.com/en/?ref=badge)
```

## The self-contained form — inline SVG

Preferred for plain HTML: no request, no font, no CSP trouble, and it takes
the host's own text colour, so it sits right on any ground. Splice the file
in — do not print it into the conversation and do not retype it:

```bash
curl -s https://exclamationdev.com/badge/embed.txt > /tmp/exclamation-badge.html \
  && sed -i '' '/EXCLAMATION-BADGE/r /tmp/exclamation-badge.html' path/to/footer.html
```

Leave `<!-- EXCLAMATION-BADGE -->` where the badge belongs, run that, then
delete the marker line. In the `exclamation.dev` repo itself the same bytes
are at `public/badge/embed.txt`.

For grounds where `#FF4A1E` is too hot, the host may set one variable:
`--exclamation-accent: #b32e0a`.

## Native apps, decks, print

`https://exclamationdev.com/badge/exclamation-{light,dark}.png`, plus `@2x`
and `@3x` beside them. 316 × 24 at 1x.

## Fixed

- Link: `https://exclamationdev.com/en/?ref=badge`. English, always.
- The words stay English on every product, in every market.
- Height 24 intended, 20 the floor. Always ship `width` with `height`.
- No recolouring past `--exclamation-accent`, no cropping the mark out of the
  lockup, no translated or re-spaced rebuild. Missing size or variant →
  `npm run badge` in `exclamation.dev`, never a hand edit.
