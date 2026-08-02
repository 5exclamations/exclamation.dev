import az from './az';
import ru from './ru';
import en from './en';
import { techCount } from '../data/tech';

export const locales = ['az', 'ru', 'en'] as const;
export type Locale = (typeof locales)[number];

/**
 * Single source of truth for the studio's age. Copy carries {year} and
 * {years} placeholders so the founding year and the count can never drift
 * apart the way "since 2019" and "6 years" did.
 */
export const FOUNDED = 2019;
/** Build-time "now". The copyright line and the age come from this one date. */
export const YEAR = new Date().getFullYear();
export const YEARS = YEAR - FOUNDED;

/**
 * {tech} is counted from `data/tech.ts`, never typed. If the stack list is
 * trimmed the metrics band follows it down — the number describes the data,
 * the data is not padded to fit the number.
 */
export const fill = (s: string): string =>
  s
    .replaceAll('{year}', String(FOUNDED))
    .replaceAll('{years}', String(YEARS))
    .replaceAll('{now}', String(YEAR))
    .replaceAll('{tech}', String(techCount));

export const dictionaries = { az, ru, en };

export type Dict = typeof az;

export function t(locale: Locale): Dict {
  return dictionaries[locale] as Dict;
}

/**
 * az lives at the root, the other two are prefixed.
 *
 * Always ends in a slash. Cloudflare Pages 308-redirects `/ru` to `/ru/`, so
 * a canonical, an hreflang or an internal href without the slash points at a
 * redirect rather than at the page — verified against the Pages runtime, not
 * assumed.
 */
export function localePath(locale: Locale, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const withLocale = locale === 'az' ? clean : `/${locale}${clean === '/' ? '' : clean}`;
  return withLocale.endsWith('/') ? withLocale : `${withLocale}/`;
}

export const localeNames: Record<Locale, string> = {
  az: 'AZ',
  ru: 'RU',
  en: 'EN',
};

/** Which font subset carries the bulk of each locale, for preloading. */
export const localeSubset: Record<Locale, string> = {
  az: 'latin-ext',
  ru: 'cyrillic',
  en: 'latin',
};
