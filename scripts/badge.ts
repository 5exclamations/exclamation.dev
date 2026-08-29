/**
 * The attribution badge: "DEVELOPED BY ! EXCLAMATION".
 *
 * Built once, committed to `public/badge/`, and pasted verbatim into client
 * products. It has to render identically on a machine that has never heard of
 * Geologica, so the two words are laid out with satori and shipped as glyph
 * outlines — no webfont, no fallback, no request.
 *
 * The layout mirrors the header lockup exactly: mono eyebrow, the bar-and-dot
 * mark at 1.2x the wordmark's size, wordmark in display 500 at 0.16em.
 *
 *   node scripts/badge.ts
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import satori from 'satori';
import sharp from 'sharp';
import { instanceFont } from '../src/lib/instance-font.ts';

/* the six hex, and the one mix, straight out of tokens.css */
const INK = '#0b0e11';
const BONE = '#e8e6e0';
const ASH = '#8b949e';
const SIGNAL = '#ff4a1e';
const EMBER = '#b32e0a';
/** color-mix(in srgb, var(--ink) 62%, var(--bone)) resolved */
const MUTED_LIGHT = '#5f6060';

/** sentinels: satori writes them into `fill`, the post-pass swaps them for roles */
const S_LABEL = '#ff0001';
const S_WORD = '#ff0002';
const S_MARK = '#ff0003';

const HREF = 'https://exclamationdev.com/en/?ref=badge';
const ALT = 'Developed by EXCLAMATION';

const OUT = join(process.cwd(), 'public', 'badge');

const el = (type: string, style: Record<string, unknown>, children?: unknown) => ({
  type,
  props: children === undefined ? { style } : { style, children },
});

/** the lockup, at the size satori lays it out in; the viewBox is trimmed to it after */
const badge = () =>
  el('div', { display: 'flex', alignItems: 'center' }, [
    el(
      'div',
      { fontFamily: 'Mono', fontSize: 18, letterSpacing: 2.2, color: S_LABEL, marginRight: 20 },
      'DEVELOPED BY'
    ),
    // bar and dot: the header svg's proportions (17:4:4 of 25) scaled to 1.2x the word,
    // set off from the wordmark by the header's own 0.67em gap
    el('div', { display: 'flex', flexDirection: 'column', gap: 5, marginRight: 17 }, [
      el('div', { width: 5, height: 21, background: S_MARK }),
      el('div', { width: 5, height: 5, background: S_MARK }),
    ]),
    el(
      'div',
      { fontFamily: 'Display', fontSize: 26, fontWeight: 500, letterSpacing: 4.2, color: S_WORD },
      'EXCLAMATION'
    ),
  ]);

async function render(width: number, height: number) {
  const fonts = [
    { name: 'Display', data: await instanceFont('Geologica-latin', 500), weight: 500 as const, style: 'normal' as const },
    { name: 'Mono', data: await instanceFont('JetBrainsMono-latin', 400), weight: 400 as const, style: 'normal' as const },
  ];
  return satori(badge() as never, { width, height, fonts });
}

/**
 * satori emits an overflow mask whose rect is the content box; that rect is the
 * tight bounding box of the lockup, so the first pass measures and the second
 * lays the same tree out on a canvas of exactly that size.
 */
function contentBox(svg: string) {
  const m = svg.match(/<mask[^>]*><rect x="0" y="0" width="(\d+(?:\.\d+)?)" height="(\d+(?:\.\d+)?)"/);
  if (!m) throw new Error('satori changed its output shape: no content-box mask found');
  return { w: Math.ceil(Number(m[1])), h: Math.ceil(Number(m[2])) };
}

/** strip satori's unreferenced overflow masks and its wrapper group */
function clean(svg: string) {
  return svg
    .replace(/<mask[\s\S]*?<\/mask>/g, '')
    .replace(/<g\s+>/g, '<g>')
    .replace(/\s+>/g, '>');
}

type Skin = { fg: string; muted: string; mark: string };

function paint(body: string, skin: Skin | 'inherit') {
  if (skin === 'inherit') {
    return body
      .replaceAll(`fill="${S_LABEL}"`, 'fill="currentColor" fill-opacity=".62"')
      .replaceAll(`fill="${S_WORD}"`, 'fill="currentColor"')
      .replaceAll(`fill="${S_MARK}"`, 'fill="var(--exclamation-accent,#ff4a1e)"');
  }
  return body
    .replaceAll(S_LABEL, skin.muted)
    .replaceAll(S_WORD, skin.fg)
    .replaceAll(S_MARK, skin.mark);
}

const LIGHT: Skin = { fg: INK, muted: MUTED_LIGHT, mark: EMBER };
const DARK: Skin = { fg: BONE, muted: ASH, mark: SIGNAL };

/** nominal size: the height a footer wants, the width its aspect demands */
const H1X = 24;

function wrap(body: string, box: { w: number; h: number }, extra = '') {
  const w = Math.round((H1X * box.w) / box.h);
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${H1X}" ` +
    `viewBox="0 0 ${box.w} ${box.h}" role="img" aria-label="${ALT}">` +
    `<title>${ALT}</title>${extra}${body}</svg>\n`
  );
}

/** the auto file is for <img>, where currentColor cannot reach: it carries its own switch */
const AUTO_STYLE =
  `<style>.f{fill:${INK}}.m{fill:${MUTED_LIGHT}}.a{fill:${EMBER}}` +
  `@media(prefers-color-scheme:dark){.f{fill:${BONE}}.m{fill:${ASH}}.a{fill:${SIGNAL}}}</style>`;

function classed(body: string) {
  return body
    .replaceAll(`fill="${S_LABEL}"`, 'class="m"')
    .replaceAll(`fill="${S_WORD}"`, 'class="f"')
    .replaceAll(`fill="${S_MARK}"`, 'class="a"');
}

const measured = await render(900, 200);
const box = contentBox(measured);
const raw = clean(await render(box.w, box.h));
/** everything between the root <svg> and its close: the paths only */
const body = raw.replace(/^<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');

const files: Record<string, string> = {
  'exclamation.svg': wrap(paint(body, 'inherit'), box),
  'exclamation-light.svg': wrap(paint(body, LIGHT), box),
  'exclamation-dark.svg': wrap(paint(body, DARK), box),
  'exclamation-auto.svg': wrap(classed(body), box, AUTO_STYLE),
};

await mkdir(OUT, { recursive: true });
for (const [name, svg] of Object.entries(files)) await writeFile(join(OUT, name), svg);

/* rasters for software that cannot draw an svg: app about-screens, readmes, decks */
for (const theme of ['light', 'dark'] as const) {
  const svg = files[`exclamation-${theme}.svg`];
  for (const scale of [1, 2, 3]) {
    const png = await sharp(Buffer.from(svg), { density: 72 * scale })
      .png({ compressionLevel: 9 })
      .toBuffer();
    const suffix = scale === 1 ? '' : `@${scale}x`;
    await writeFile(join(OUT, `exclamation-${theme}${suffix}.png`), png);
  }
}

/* the snippet everything else quotes, so there is exactly one canonical string */
const inline =
  `<a href="${HREF}" target="_blank" rel="noopener" aria-label="${ALT}"` +
  ` style="display:inline-flex;align-items:center;color:inherit;text-decoration:none">` +
  files['exclamation.svg'].trim().replace(' role="img"', '').replace(` aria-label="${ALT}"`, ' aria-hidden="true" focusable="false"') +
  `</a>\n`;
await writeFile(join(OUT, 'embed.txt'), inline);

console.log(`box ${box.w}x${box.h}  ->  ${H1X}px tall, ${Math.round((H1X * box.w) / box.h)}px wide`);
console.log(`svg ${files['exclamation.svg'].length} bytes, inline snippet ${inline.length} bytes`);
