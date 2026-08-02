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
import erp1 from '../assets/pics/ERP/photo_1_2026-04-27_01-03-50.jpg';
import erp2 from '../assets/pics/ERP/photo_2_2026-04-27_01-03-50.jpg';
import erp3 from '../assets/pics/ERP/photo_3_2026-04-27_01-03-50.jpg';
import merk1 from '../assets/pics/merk/screen1.png';
import merk2 from '../assets/pics/merk/screen.png';
import merk3 from '../assets/pics/merk/screen2.png';
import mob1 from '../assets/pics/mobile/photo_2026-04-27_17-55-50.jpg';
import mob2 from '../assets/pics/mobile/photo_2026-04-27_17-55-51.jpg';
import mob3 from '../assets/pics/mobile/photo_2026-04-27_17-55-52.jpg';
import shop1 from '../assets/pics/website/2.png';
import shop2 from '../assets/pics/website/3.jpg';
import shop3 from '../assets/pics/website/4.jpg';

export type Shot = {
  img: ImageMetadata;
  /** overrides the case-level crop when this screen's content sits elsewhere */
  crop?: [number, number, number];
};

export type CaseMedia = {
  slug: string;
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
    /** these are wide, shallow panels — cropping to 4:3 would eat the content */
    shape: 'desktop',
    fit: 'contain',
    shots: [{ img: erp1 }, { img: erp2 }, { img: erp3 }],
    crop: [900, 170, 40],
    headline: 0,
  },
  {
    slug: 'merkuri',
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
    shape: 'phone',
    fit: 'contain',
    shots: [{ img: mob1 }, { img: mob2 }, { img: mob3 }],
    crop: [420, 0, 0],
    headline: 0,
  },
  {
    slug: 'smart-fashion',
    shape: 'desktop',
    fit: 'cover',
    shots: [{ img: shop1 }, { img: shop2 }, { img: shop3 }],
    crop: [740, 60, 40],
    headline: 0,
  },
  {
    /** no screenshot exists for this one — the case page draws a mockup */
    slug: 'ai-assistent',
    shape: 'desktop',
    fit: 'cover',
    shots: [],
    crop: [0, 0, 0],
    headline: 0,
  },
];

export const mediaFor = (slug: string) => caseMedia.find((m) => m.slug === slug)!;

/** the first screen's image, shown at the top of the landing page */
export const heroShot = crm1;
