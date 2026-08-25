/**
 * One canonical name for the studio, everywhere.
 *
 * The brand currently appears as EXCLAMATION (the wordmark), exclamationdev.com
 * (the production domain), exclamation.dev (the repository) and 5exclamations
 * (the GitHub account). Search engines and language models treat those as four
 * entities unless told otherwise, so exactly one is the `name` and the rest are
 * declared as `alternateName`.
 */
export const ORG_NAME = 'EXCLAMATION';

export const ORG_ALTERNATE_NAMES = ['exclamationdev.com', 'exclamation.dev', '5exclamations'];

export const ORG_ID = 'https://exclamationdev.com/#organization';
export const SERVICE_ID = 'https://exclamationdev.com/#service';

export const FOUNDING_LOCATION = 'Baku, Azerbaijan';

/**
 * Profiles that genuinely exist and that we can point at. A `sameAs` entry is
 * a claim that the studio controls that URL, so an unverified one is worse
 * than a missing one — LinkedIn is left empty on purpose and filtered out
 * below until somebody supplies the real profile URL.
 */
export const SAME_AS: string[] = [
  'https://github.com/5exclamations',
  'https://t.me/exclamationdev',
  'https://www.instagram.com/exclamation.dev/',
  // 'https://www.linkedin.com/company/...',  <- needs the real URL
].filter(Boolean);

/**
 * City-level only. The studio's street address is not recorded anywhere in
 * this repository, and a fabricated one in structured data is worse than an
 * absent one; `geo` is the centre of Baku, not the office door.
 */
export const ADDRESS = {
  addressLocality: 'Baku',
  addressCountry: 'AZ',
} as const;

export const GEO = { latitude: 40.4093, longitude: 49.8671 } as const;
