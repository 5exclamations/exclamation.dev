/**
 * Non-localised case metadata: which real screenshots belong to which project
 * and how each one should be framed. Copy lives in the locale dictionaries;
 * the two are joined by `slug`.
 *
 * The images are imported rather than referenced by URL. They live in
 * `src/assets`, not `public`, because Astro only optimises what it can see at
 * build time — anything under `public/` is copied through untouched. The
 * import also carries the true intrinsic size, so the width/height that used
 * to be typed by hand (and were wrong for every image at one point) now come
 * from the file itself and cannot drift.
 */
import type { ImageMetadata } from 'astro';

import crm1 from '../assets/pics/crm/screen1.png';
import crm2 from '../assets/pics/crm/screen2.png';
import crm3 from '../assets/pics/crm/screen3.png';
import dv1 from '../assets/pics/drvusala/screen1.jpg';
import dv2 from '../assets/pics/drvusala/screen2.jpg';
import dv3 from '../assets/pics/drvusala/screen3.jpg';
import erp1 from '../assets/pics/ERP/photo_1_2026-04-27_01-03-50.jpg';
import erp2 from '../assets/pics/ERP/photo_2_2026-04-27_01-03-50.jpg';
import erp3 from '../assets/pics/ERP/photo_3_2026-04-27_01-03-50.jpg';
import merk1 from '../assets/pics/merk/screen1.png';
import merk2 from '../assets/pics/merk/screen.png';
import merk3 from '../assets/pics/merk/screen2.png';
import mob1 from '../assets/pics/mobile/photo_2026-04-27_17-55-50.jpg';
import mob2 from '../assets/pics/mobile/photo_2026-04-27_17-55-51.jpg';
import mob3 from '../assets/pics/mobile/photo_2026-04-27_17-55-52.jpg';
import raiton1 from '../assets/pics/raiton/screen1.jpg';
import raiton2 from '../assets/pics/raiton/screen2.jpg';
import raiton3 from '../assets/pics/raiton/screen3.png';
import shop1 from '../assets/pics/website/2.png';
import shop2 from '../assets/pics/website/3.jpg';
import shop3 from '../assets/pics/website/4.jpg';

export type Shot = {
  img: ImageMetadata;
  /** overrides the case-level crop when this screen's content sits elsewhere */
  crop?: [number, number, number];
};

/**
 * Client work and work with no client are different claims, and the index
 * page groups them apart rather than letting a studio product borrow the
 * credibility of a delivered system. Nothing on the landing page reads this
 * field — there the six are all client work — but `/is/` does, and a new case
 * cannot be added without answering the question.
 */
export type CaseKind = 'client' | 'product';

export type CaseMedia = {
  slug: string;
  kind: CaseKind;
  /** portrait phone screens are letterboxed rather than cropped */
  shape: 'desktop' | 'phone';
  /** how the index thumbnail fills its 4:3 frame */
  fit: 'cover' | 'contain';
  shots: Shot[];
  /** detail crop for narrow viewports: [renderWidth, left, top] */
  crop: [number, number, number];
  /** index of the result to surface on the index card */
  headline: number;
};

export const caseMedia: CaseMedia[] = [
  {
    slug: 'crm-portal',
    kind: 'client',
    shape: 'desktop',
    fit: 'cover',
    shots: [
      { img: crm1 },
      { img: crm2, crop: [780, 150, 150] },
      { img: crm3, crop: [780, 145, 95] },
    ],
    crop: [780, 155, 95],
    headline: 0,
  },
  {
    slug: 'fleks',
    kind: 'client',
    /** these are wide, shallow panels — cropping to 4:3 would eat the content */
    shape: 'desktop',
    fit: 'contain',
    shots: [{ img: erp1 }, { img: erp2 }, { img: erp3 }],
    crop: [900, 170, 40],
    headline: 0,
  },
  {
    slug: 'merkuri',
    kind: 'client',
    shape: 'desktop',
    fit: 'cover',
    shots: [
      { img: merk1 },
      { img: merk2, crop: [780, 165, 200] },
      { img: merk3, crop: [780, 165, 130] },
    ],
    crop: [780, 160, 100],
    headline: 0,
  },
  {
    slug: 'mindtrick',
    kind: 'client',
    shape: 'phone',
    fit: 'contain',
    shots: [{ img: mob1 }, { img: mob2 }, { img: mob3 }],
    crop: [420, 0, 0],
    headline: 0,
  },
  {
    slug: 'smart-fashion',
    kind: 'client',
    shape: 'desktop',
    fit: 'cover',
    shots: [{ img: shop1 }, { img: shop2 }, { img: shop3 }],
    crop: [740, 60, 40],
    headline: 0,
  },
  {
    slug: 'raiton',
    kind: 'client',
    shape: 'desktop',
    fit: 'cover',
    shots: [
      { img: raiton1 },
      /* the two sector headlines run wider than the hero's, so their slices
         render the screenshot smaller to fit the line at 320 — computed from
         the frame width there, not from the source pixels */
      { img: raiton2, crop: [530, 111, 50] },
      /* the Turkish headline cannot fit a 320px frame without shrinking the
         page past reading size, so this slice takes the Dubai address block
         instead — whole words, and still unmistakably the Turkish build */
      { img: raiton3, crop: [820, 20, 359] },
    ],
    crop: [740, 18, 305],
    headline: 0,
  },
  {
    slug: 'drvusalagasimova',
    kind: 'client',
    shape: 'desktop',
    fit: 'cover',
    shots: [
      { img: dv1 },
      { img: dv2, crop: [610, 84, 42] },
      /* the modal sits mid-screen, so this slice starts at the top edge to
         keep the AZ / RU / EN / DE switch in frame beside it */
      { img: dv3, crop: [620, 194, 0] },
    ],
    crop: [620, 87, 70],
    headline: 0,
  },
  {
    /** no screenshot exists for this one — the case page draws a mockup */
    slug: 'ai-assistent',
    kind: 'client',
    shape: 'desktop',
    fit: 'cover',
    shots: [],
    crop: [0, 0, 0],
    headline: 0,
  },
];

export const mediaFor = (slug: string) => caseMedia.find((m) => m.slug === slug)!;

/** slugs of one kind, in the order they are declared above */
export const slugsOfKind = (kind: CaseKind) =>
  caseMedia.filter((m) => m.kind === kind).map((m) => m.slug);

/**
 * `heroShot` and `HERO_IMAGE` were removed on 2026-08-09 along with the first
 * screen's screenshot. The same image (crm1) still leads the `work` section
 * and the CRM Portal case page, so nothing about the asset itself changed —
 * only that the landing page no longer opens with it.
 */
