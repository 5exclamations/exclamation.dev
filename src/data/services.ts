import { localePath, locales, type Locale } from '../i18n';

/**
 * Service pages have a different slug in every language — `/xidmetler/...`,
 * `/ru/uslugi/...`, `/en/services/...` — because the slug is part of what the
 * page ranks for, and a transliterated Azerbaijani word is not what a Russian
 * speaker types.
 *
 * That breaks the assumption everywhere else on the site, where a route is one
 * locale-free path with a prefix. So the alternates are declared here rather
 * than derived, and `Base`, `Header` and `Footer` take them as a prop.
 */
export interface ServiceRoute {
  key: string;
  /** path within each locale, without the locale prefix */
  slugs: Record<Locale, string>;
}

export const services: ServiceRoute[] = [
  {
    key: 'crm-erp',
    slugs: {
      az: '/xidmetler/crm-erp-sistemleri',
      ru: '/uslugi/crm-erp',
      en: '/services/crm-erp',
    },
  },
];

export const serviceByKey = (key: string): ServiceRoute =>
  services.find((s) => s.key === key)!;

/** full path per locale, ready for canonical, hreflang and the language switch */
export function serviceAlternates(key: string): Record<Locale, string> {
  const { slugs } = serviceByKey(key);
  return Object.fromEntries(
    locales.map((l) => [l, localePath(l, slugs[l])])
  ) as Record<Locale, string>;
}

/** every service URL, for the sitemap */
export function allServicePaths(): { key: string; paths: Record<Locale, string> }[] {
  return services.map((s) => ({ key: s.key, paths: serviceAlternates(s.key) }));
}
