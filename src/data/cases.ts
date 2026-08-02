/**
 * Non-localised case metadata: which real screenshots belong to which project,
 * their true pixel sizes, and how each one should be framed. Copy lives in the
 * locale dictionaries; the two are joined by `slug`.
 */
export type Shot = {
  src: string;
  /** real intrinsic size — wrong values here cause layout shift */
  w: number;
  h: number;
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
      { src: '/pics/crm/screen1.png', w: 1600, h: 1280 },
      { src: '/pics/crm/screen2.png', w: 1600, h: 1280, crop: [780, 150, 150] },
      { src: '/pics/crm/screen3.png', w: 1600, h: 1280, crop: [780, 145, 95] },
    ],
    crop: [780, 155, 95],
    headline: 0,
  },
  {
    slug: 'fleks',
    /** these are wide, shallow panels — cropping to 4:3 would eat the content */
    shape: 'desktop',
    fit: 'contain',
    shots: [
      { src: '/pics/ERP/photo_1_2026-04-27_01-03-50.jpg', w: 1280, h: 585 },
      { src: '/pics/ERP/photo_2_2026-04-27_01-03-50.jpg', w: 1280, h: 583 },
      { src: '/pics/ERP/photo_3_2026-04-27_01-03-50.jpg', w: 1280, h: 284 },
    ],
    crop: [900, 170, 40],
    headline: 0,
  },
  {
    slug: 'merkuri',
    shape: 'desktop',
    fit: 'cover',
    shots: [
      { src: '/pics/merk/screen1.png', w: 1600, h: 1280 },
      { src: '/pics/merk/screen.png', w: 1600, h: 1280, crop: [780, 165, 200] },
      { src: '/pics/merk/screen2.png', w: 1600, h: 1280, crop: [780, 165, 130] },
    ],
    crop: [780, 160, 100],
    headline: 0,
  },
  {
    slug: 'mindtrick',
    shape: 'phone',
    fit: 'contain',
    shots: [
      { src: '/pics/mobile/photo_2026-04-27_17-55-50.jpg', w: 566, h: 1280 },
      { src: '/pics/mobile/photo_2026-04-27_17-55-51.jpg', w: 566, h: 1280 },
      { src: '/pics/mobile/photo_2026-04-27_17-55-52.jpg', w: 566, h: 1280 },
    ],
    crop: [420, 0, 0],
    headline: 0,
  },
  {
    slug: 'smart-fashion',
    shape: 'desktop',
    fit: 'cover',
    shots: [
      { src: '/pics/website/2.png', w: 737, h: 537 },
      { src: '/pics/website/3.jpg', w: 882, h: 700 },
      { src: '/pics/website/4.jpg', w: 633, h: 582 },
    ],
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
