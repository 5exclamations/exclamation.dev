import type { CaseKind } from '../data/cases';
import type { Locale } from './index';

/**
 * Copy for the work index — `/is/`, `/ru/is/`, `/en/is/`.
 *
 * One slug in all three languages, like the FAQ page, so the route needs no
 * `alternates` record. The page lists every case; the landing page's `work`
 * section keeps showing six, because that section is a glance and this page
 * is the archive.
 *
 * Three languages written from the language, not translated. The facts are
 * shared and the framing is not: az names the sectors a Baku buyer
 * recognises, ru leads on what each system replaced, en is British and reads
 * as an outsourcing shortlist.
 *
 * `{count}` is substituted from the case list at build time — the number
 * describes the data, and cannot drift the way a typed figure does. The
 * grammar around it holds from six upwards in all three languages, which is
 * the only range the site will ever be in.
 */

export type WorkIndexPage = {
  meta: { title: string; description: string };
  eyebrow: string;
  titleMuted: string;
  titleMain: string;
  /** paragraphs; exactly one of them is a single line carrying a concession */
  lead: string[];
  /** a heading per kind, rendered only for kinds that have cases */
  groups: Record<CaseKind, { title: string; note: string }>;
};

/** the only placeholder this page uses; `fill()` handles the site-wide ones */
export const fillCount = (s: string, count: number): string =>
  s.replaceAll('{count}', String(count));

export const workIndex: Record<Locale, WorkIndexPage> = {
  az: {
    meta: {
      title: 'İşlər və keyslər — EXCLAMATION',
      description:
        '{count} layihə: daşınmaz əmlak agentlikləri üçün CRM, psixoloji mərkəzin ERP-si, gömrük və yükdaşıma üçün bulud platforması, ticarət şirkəti və həkim üçün saytlar, vərdiş izləyicisi, onlayn mağaza, AI köməkçi və sürətli oxu tətbiqi. Hər keysdə tapşırıq, həll və nəticə.',
    },
    eyebrow: 'İşlər',
    titleMuted: 'Studiyanın işləri.',
    titleMain: 'Kimə və nə qurulub.',
    lead: [
      '{count} layihə: daxili iş üçün CRM və ERP, yükdaşıma və gömrük üçün bulud portalı, iki sayt — Dubaydakı ticarət şirkəti və Bakıdakı həkim üçün, vərdiş izləyicisi, onlayn mağaza, çatda cavab verən AI köməkçi və sürətli oxu tətbiqi.',
      'Hər biri tam açılır — nədən başladıq, nə qurduq, sonu necə oldu və hansı texnologiya ilə yazılıb.',
      'Sistemlərin bir hissəsi daxilidir, açıq linki yoxdur.',
    ],
    groups: {
      /* short enough to hold a 16rem column in two lines: the first draft ran
         to three and the figure beside it lost its heading */
      client: {
        title: 'Müştəri sistemləri',
        note: 'Sifarişçi üçün qurulub və ona təhvil verilib.',
      },
      product: {
        title: 'Öz məhsullarımız',
        note: 'Sifarişçi olmadan, studiyanın içində yazılıb.',
      },
    },
  },

  ru: {
    meta: {
      title: 'Кейсы и работы студии — EXCLAMATION',
      description:
        '{count} проектов EXCLAMATION: CRM для агентств недвижимости, ERP психологического центра, платформа для логистики и таможни, сайты торговой компании и врача, трекер привычек, интернет-магазин, AI-ассистент, читалка со скорочтением. Задача, решение и результат по каждому.',
    },
    eyebrow: 'Работы',
    titleMuted: 'Портфолио студии.',
    titleMain: 'Что и для кого сделано.',
    lead: [
      '{count} проектов: CRM и ERP для внутренней работы, облачный портал для грузоперевозок и таможни, два сайта — торговой компании в Дубае и врача в Баку, трекер привычек, интернет-магазин, AI-ассистент в чате и читалка со скорочтением.',
      'Каждый открывается целиком — с чего начали, что построили, чем это кончилось и на чём написано.',
      'Часть систем внутренние, публичной ссылки у них нет.',
    ],
    groups: {
      client: {
        title: 'Клиентские системы',
        note: 'Сделаны под заказ и переданы заказчику.',
      },
      product: {
        title: 'Собственные продукты',
        note: 'Написаны внутри студии, без заказчика.',
      },
    },
  },

  en: {
    meta: {
      title: 'Case studies and work — EXCLAMATION',
      description:
        '{count} projects by EXCLAMATION: a CRM for estate agencies, an ERP for a psychology centre, a freight and customs platform, sites for a trading company and a doctor, a habit tracker, an online shop, an AI assistant and a speed-reading app. Problem, build and outcome for each.',
    },
    eyebrow: 'Work',
    titleMuted: 'The studio’s portfolio.',
    titleMain: 'What was built, and who for.',
    lead: [
      '{count} projects: a CRM and an ERP for internal work, a cloud portal for freight and customs, two sites — one for a Dubai trading company and one for a doctor in Baku — a habit tracker, an online shop, an AI assistant that answers in chat and a speed-reading app.',
      'Each one opens in full — where it started, what we built, how it ended and what it runs on.',
      'Some of them are internal systems, with no public link to give.',
    ],
    groups: {
      client: {
        title: 'Client systems',
        note: 'Built to order and handed over.',
      },
      product: {
        title: 'Studio products',
        note: 'Written in-house, with no client.',
      },
    },
  },
};
