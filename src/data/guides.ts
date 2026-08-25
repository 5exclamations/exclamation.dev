import { localePath, locales, type Locale } from '../i18n';

/**
 * Search guides use a local keyword-shaped slug in every language. Keeping
 * the route table beside the service route table gives canonical, hreflang,
 * the language switcher, internal links and the sitemap one source of truth.
 */
export interface GuideRoute {
  key: string;
  slugs: Record<Locale, string>;
  /** service pages that should point at this guide */
  serviceKeys: string[];
}

export const guides: GuideRoute[] = [
  {
    key: 'website-cost',
    slugs: {
      az: '/bloq/sayt-hazirlanmasi-qiymetleri-baki',
      ru: '/blog/stoimost-razrabotki-sayta-baku',
      en: '/blog/website-development-cost-baku',
    },
    serviceKeys: ['web'],
  },
  {
    key: 'crm-cost',
    slugs: {
      az: '/bloq/crm-sistemi-qiymeti-azerbaycan',
      ru: '/blog/stoimost-crm-sistemy-azerbaydzhan',
      en: '/blog/crm-system-cost-azerbaijan',
    },
    serviceKeys: ['crm-erp'],
  },
  {
    key: 'crm-choice',
    slugs: {
      az: '/bloq/bitrix24-amocrm-ferdi-crm',
      ru: '/blog/bitrix24-amocrm-ili-individualnaya-crm',
      en: '/blog/bitrix24-amocrm-or-custom-crm',
    },
    serviceKeys: ['crm-erp'],
  },
  {
    key: 'mobile-cost',
    slugs: {
      az: '/bloq/mobil-tetbiq-hazirlanmasi-qiymeti',
      ru: '/blog/stoimost-razrabotki-mobilnogo-prilozheniya',
      en: '/blog/mobile-app-development-cost',
    },
    serviceKeys: ['mobile'],
  },
  {
    key: 'ecommerce-cost',
    slugs: {
      az: '/bloq/onlayn-magaza-hazirlanmasi-qiymeti',
      ru: '/blog/stoimost-razrabotki-internet-magazina',
      en: '/blog/ecommerce-development-cost',
    },
    serviceKeys: ['ecommerce', 'web'],
  },
];

export const guideByKey = (key: string): GuideRoute =>
  guides.find((guide) => guide.key === key)!;

export function guideAlternates(key: string): Record<Locale, string> {
  const { slugs } = guideByKey(key);
  return Object.fromEntries(
    locales.map((locale) => [locale, localePath(locale, slugs[locale])])
  ) as Record<Locale, string>;
}

export const guidesForService = (serviceKey: string): GuideRoute[] =>
  guides.filter((guide) => guide.serviceKeys.includes(serviceKey));

export function allGuidePaths(): { key: string; paths: Record<Locale, string> }[] {
  return guides.map((guide) => ({ key: guide.key, paths: guideAlternates(guide.key) }));
}
