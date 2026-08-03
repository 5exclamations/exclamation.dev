import type { APIRoute } from 'astro';
import satori from 'satori';
import sharp from 'sharp';
import { instanceFont } from '../../lib/instance-font';
import { locales, localeSubset, t, fill, type Locale } from '../../i18n';
import { mediaFor } from '../../data/cases';
import { crmErp } from '../../i18n/services/crm-erp';
import { web } from '../../i18n/services/web';
import { mobile } from '../../i18n/services/mobile';
import { ecommerce } from '../../i18n/services/ecommerce';
import { integrations } from '../../i18n/services/integrations';
import { services } from '../../data/services';

/** service key -> its copy, so a new service page gets a card by adding one line */
const serviceCopy: Record<string, typeof crmErp> = { 'crm-erp': crmErp, web, mobile, ecommerce, integrations };

/**
 * Open Graph cards, rendered at build time.
 *
 * satori lays out a plain element tree to SVG, sharp turns that into PNG. The
 * fonts are the site's own self-hosted woff2, decompressed to TTF in memory —
 * satori cannot read woff2, and shipping a second copy of each face just for
 * this would put the two out of sync the first time one is swapped.
 *
 * The card carries the signature: the rail, the 1px spine, and the square that
 * terminates it. A share preview should look like the page it points at.
 */

const W = 1200;
const H = 630;

// the six hex, same values as tokens.css
const INK = '#0b0e11';
const BONE = '#e8e6e0';
const ASH = '#8b949e';
const SIGNAL = '#ff4a1e';
const LINE = 'rgba(232, 230, 224, 0.14)';

const PAD = 72;
const RAIL = 88;
/** the spine's axis, mirroring `calc(gutter + rail / 2)` on the page */
const SPINE_X = PAD + RAIL / 2;

type FontSpec = { name: string; data: Buffer; weight: 300 | 400 | 500; style: 'normal' };

/**
 * The locale's own subset plus latin. Azerbaijani and Russian cards still
 * contain latin — product names, the domain, the wordmark — and a subsetted
 * face only carries its own range, so both have to be listed or those glyphs
 * drop out of the card silently.
 *
 * Each face is pinned to its weight by `instanceFont`; the woff2 on disk is
 * variable and satori cannot read it.
 */
async function fontsFor(locale: Locale): Promise<FontSpec[]> {
  const subset = localeSubset[locale];
  const faces: FontSpec[] = [
    { name: 'Display', data: await instanceFont(`Geologica-${subset}`, 300), weight: 300, style: 'normal' },
    { name: 'DisplayBold', data: await instanceFont(`Geologica-${subset}`, 500), weight: 500, style: 'normal' },
    { name: 'Mono', data: await instanceFont(`Commissioner-${subset}`, 400), weight: 400, style: 'normal' },
  ];
  if (subset !== 'latin') {
    // Distinct family names, not a second face under the same one: satori
    // matches a family and stops, it does not merge two faces sharing a name.
    // The stacks below then fall through for the glyphs `latin-ext` and
    // `cyrillic` do not carry — which is most of the basic latin alphabet.
    faces.push(
      { name: 'DisplayLatin', data: await instanceFont('Geologica-latin', 300), weight: 300, style: 'normal' },
      { name: 'DisplayBoldLatin', data: await instanceFont('Geologica-latin', 500), weight: 500, style: 'normal' },
      { name: 'MonoLatin', data: await instanceFont('Commissioner-latin', 400), weight: 400, style: 'normal' }
    );
  }
  return faces;
}

/* the locale subset first, latin behind it for everything the subset omits */
const DISPLAY = 'Display, DisplayLatin';
const DISPLAY_BOLD = 'DisplayBold, DisplayBoldLatin';
const MONO = 'Mono, MonoLatin';

/** satori takes react-shaped nodes; this project has no react, so build them by hand */
const el = (type: string, style: Record<string, unknown>, children?: unknown) => ({
  type,
  props: children === undefined ? { style } : { style, children },
});

const wordmark = () =>
  el('div', { display: 'flex', alignItems: 'center', gap: 14 }, [
    // the ! lockup: bar and dot, the same proportions as the header svg
    el('div', { display: 'flex', flexDirection: 'column', gap: 5 }, [
      el('div', { width: 7, height: 30, background: SIGNAL }),
      el('div', { width: 7, height: 7, background: SIGNAL }),
    ]),
    el(
      'div',
      { fontFamily: DISPLAY_BOLD, fontSize: 26, fontWeight: 500, letterSpacing: 4, color: BONE },
      'EXCLAMATION'
    ),
  ]);

type Card = { eyebrow: string; title: string; muted?: string; foot: string; note?: string };

/**
 * satori has no document language, so its `textTransform: uppercase` applies
 * invariant casing and turns Azerbaijani "bəri" into "BƏRI" instead of
 * "BƏRİ". The page gets this right because CSS casing follows `lang`; here it
 * has to be done explicitly, with the locale.
 */
const upper = (s: string, locale: Locale) => s.toLocaleUpperCase(locale === 'az' ? 'az-AZ' : locale);

function card(c: Card, locale: Locale) {
  return el(
    'div',
    {
      width: W,
      height: H,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      background: INK,
      padding: PAD,
      position: 'relative',
    },
    [
      // the spine, stopping short of the dot exactly as it does on the page
      el('div', {
        position: 'absolute',
        left: SPINE_X,
        top: 0,
        width: 1,
        height: H - 150,
        background: LINE,
      }),
      // the square that terminates it
      el('div', {
        position: 'absolute',
        left: SPINE_X - 8,
        top: H - 100,
        width: 16,
        height: 16,
        background: SIGNAL,
      }),

      wordmark(),

      el('div', { display: 'flex', flexDirection: 'column', paddingLeft: RAIL, maxWidth: 940 }, [
        el(
          'div',
          {
            fontFamily: MONO,
            fontSize: 21,
            letterSpacing: 2,
            color: ASH,
            marginBottom: 22,
          },
          upper(c.eyebrow, locale)
        ),
        el(
          'div',
          {
            display: 'flex',
            flexWrap: 'wrap',
            fontFamily: DISPLAY,
            fontWeight: 300,
            fontSize: 62,
            lineHeight: 1.08,
            letterSpacing: -1.6,
            color: BONE,
          },
          c.muted
            ? [
                el('span', { color: ASH, marginRight: 14 }, c.muted),
                el('span', { color: BONE }, c.title),
              ]
            : [el('span', {}, c.title)]
        ),
        ...(c.note
          ? [
              el(
                'div',
                { fontFamily: MONO, fontSize: 24, color: ASH, marginTop: 26 },
                c.note
              ),
            ]
          : []),
      ]),

      el(
        'div',
        {
          display: 'flex',
          fontFamily: MONO,
          fontSize: 21,
          letterSpacing: 1,
          color: ASH,
          paddingLeft: RAIL,
        },
        c.foot
      ),
    ]
  );
}

/**
 * One card per page that has a URL worth sharing: the three home pages, the
 * eighteen case pages, and a generic per-locale card the error page uses (and
 * that service pages can take over when they exist).
 */
export const getStaticPaths = () => {
  const paths: { params: { key: string }; props: { locale: Locale; card: Card } }[] = [];

  for (const locale of locales) {
    const dict = t(locale);

    paths.push({
      params: { key: `home-${locale}` },
      props: {
        locale,
        card: {
          eyebrow: fill(dict.hero.eyebrow),
          muted: dict.hero.titleMuted,
          title: dict.hero.titleMain,
          foot: 'exclamationdev.com',
        },
      },
    });

    paths.push({
      params: { key: `page-${locale}` },
      props: {
        locale,
        card: {
          eyebrow: dict.services.eyebrow,
          muted: dict.services.titleMuted,
          title: dict.services.titleMain,
          foot: 'exclamationdev.com',
        },
      },
    });

    for (const svc of services) {
      const copy = serviceCopy[svc.key]?.[locale];
      if (!copy) continue;
      paths.push({
        params: { key: `service-${svc.key}-${locale}` },
        props: {
          locale,
          card: {
            eyebrow: copy.eyebrow,
            muted: copy.titleMuted,
            title: copy.titleMain,
            note: copy.facts.map((f) => `${f.label}: ${f.value}`).slice(0, 2).join('  ·  '),
            foot: 'exclamationdev.com',
          },
        },
      });
    }

    for (const item of dict.cases) {
      const media = mediaFor(item.slug);
      const headline = item.results[media.headline];
      paths.push({
        params: { key: `case-${item.slug}-${locale}` },
        props: {
          locale,
          card: {
            eyebrow: `${item.tag} · ${item.domain}`,
            title: item.short,
            note: `${headline.value} — ${headline.label}`,
            foot: 'exclamationdev.com',
          },
        },
      });
    }
  }

  return paths;
};

export const GET: APIRoute = async ({ props }) => {
  const { locale, card: content } = props as { locale: Locale; card: Card };
  const svg = await satori(card(content, locale) as never, {
    width: W,
    height: H,
    fonts: await fontsFor(locale),
  });
  const png = await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer();
  return new Response(new Uint8Array(png), {
    headers: { 'Content-Type': 'image/png', 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
};
