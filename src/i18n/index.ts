import az from './az';
import ru from './ru';
import en from './en';

export const locales = ['az', 'ru', 'en'] as const;
export type Locale = (typeof locales)[number];

/**
 * Single source of truth for the studio's age. Copy carries {year} and
 * {years} placeholders so the founding year and the count can never drift
 * apart the way "since 2019" and "6 years" did.
 */
export const FOUNDED = 2019;
export const YEARS = new Date().getFullYear() - FOUNDED;

export const fill = (s: string): string =>
  s.replaceAll('{year}', String(FOUNDED)).replaceAll('{years}', String(YEARS));

export const dictionaries = { az, ru, en };

export type Dict = typeof az;

export function t(locale: Locale): Dict {
  return dictionaries[locale] as Dict;
}

/** az lives at the root, the other two are prefixed. */
export function localePath(locale: Locale, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === 'az' ? clean : `/${locale}${clean === '/' ? '' : clean}`;
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
