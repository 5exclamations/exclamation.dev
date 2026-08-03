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
  /**
   * Index into `dict.services.items` — the nine categories on the landing
   * page. The footer uses it to point a category at its real page instead of
   * the `#services` anchor, and categories with no page yet keep the anchor.
   * Omitted where a page does not correspond to one of the nine.
   */
  categoryIndex?: number;
}

export const services: ServiceRoute[] = [
  {
    key: 'crm-erp',
    slugs: {
      az: '/xidmetler/crm-erp-sistemleri',
      ru: '/uslugi/crm-erp',
      en: '/services/crm-erp',
    },
    categoryIndex: 2, // Korporativ sistemlər / Корпоративные системы
  },
  {
    key: 'web',
    slugs: {
      az: '/xidmetler/veb-sayt-hazirlanmasi',
      ru: '/uslugi/razrabotka-saytov',
      en: '/services/web-development',
    },
    categoryIndex: 0, // Veb inkişaf / Веб-разработка
  },
  {
    key: 'mobile',
    slugs: {
      az: '/xidmetler/mobil-tetbiq-hazirlanmasi',
      ru: '/uslugi/razrabotka-mobilnyh-prilozheniy',
      en: '/services/mobile-app-development',
    },
    categoryIndex: 3, // Mobil tətbiqlər / Мобильные приложения
  },
  {
    key: 'ecommerce',
    slugs: {
      az: '/xidmetler/onlayn-magaza',
      ru: '/uslugi/internet-magazin',
      en: '/services/ecommerce-development',
    },
    // no categoryIndex on purpose: "online stores" is an item inside the Web
    // category, not one of the nine, so this page gets no footer row. Decided
    // 2026-08-03 — the page is reached from the web copy and the services menu.
  },
  {
    key: 'integrations',
    slugs: {
      az: '/xidmetler/inteqrasiya-ve-avtomatlasdirma',
      ru: '/uslugi/integracii-i-avtomatizaciya',
      en: '/services/integrations-automation',
    },
    categoryIndex: 6, // İnteqrasiya və avtomatlaşdırma / Интеграции и автоматизация
  },
  {
    key: 'bots-ai',
    slugs: {
      az: '/xidmetler/botlar-ve-ai-helleri',
      ru: '/uslugi/boty-i-ai',
      en: '/services/bots-ai',
    },
    categoryIndex: 4, // Botlar və AI həlləri / Боты и AI-решения
  },
];

/** the service page for a landing-page category, if one has been written yet */
export const serviceForCategory = (index: number): ServiceRoute | undefined =>
  services.find((s) => s.categoryIndex === index);

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
