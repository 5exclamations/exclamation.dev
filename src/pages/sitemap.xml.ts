import type { APIRoute } from 'astro';
import { locales, localePath, t } from '../i18n';
import { allServicePaths } from '../data/services';
import { allGuidePaths } from '../data/guides';

/**
 * Built from the same route list the pages are built from, so a page cannot
 * exist without appearing here (or appear here without existing).
 *
 * Every URL carries an `xhtml:link alternate` for all three locales plus
 * x-default, and every locale's variant of one page carries the identical
 * alternates block — that is what tells a crawler the three are one document
 * in three languages rather than three competing pages.
 *
 * Service and guide routes use their own localised slug tables.
 *
 * Deliberately absent: the 404 routes (noindex, and an error page in a
 * sitemap is a crawl instruction to index an error), and the OG image
 * endpoints (images, not pages).
 */
const SITE = 'https://exclamationdev.com';

export const GET: APIRoute = () => {
  // locale-free paths; each becomes one <url> per locale
  // the FAQ page shares one slug across all three locales, so it belongs here
  // with the home page rather than with the per-locale service slugs below
  const paths = ['/', '/faq', ...t('az').cases.map((c) => `/is/${c.slug}`)];

  /** shared-path routes: one locale-free path, three prefixed URLs */
  const sharedUrls = paths.flatMap((path) =>
    locales.map((locale) => {
      const alternates = [
        ...locales.map(
          (l) =>
            `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${localePath(l, path)}"/>`
        ),
        // x-default points at the Azerbaijani version, and it has to be the
        // same URL the az hreflang gives — `localePath`, not the raw path.
        // Using `path` here emitted `/faq` and `/is/fleks` while `<loc>` and
        // the HTML `<link>` both said `/faq/` and `/is/fleks/`; Cloudflare 308s
        // the slashless form, and an hreflang pointing at a redirect is one
        // Google drops rather than follows. 21 of the 42 URLs were affected.
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${localePath('az', path)}"/>`,
      ].join('\n');

      return [
        '  <url>',
        `    <loc>${SITE}${localePath(locale, path)}</loc>`,
        alternates,
        // the landing page is the entry point; the cases sit below it
        `    <priority>${path === '/' ? '1.0' : '0.8'}</priority>`,
        '  </url>',
      ].join('\n');
    })
  );

  /**
   * Service pages have a different slug per language, so their alternates come
   * from the route table rather than from prefixing one path.
   */
  const serviceUrls = allServicePaths().flatMap(({ paths: alt }) =>
    locales.map((locale) => {
      const alternates = [
        ...locales.map(
          (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${alt[l]}"/>`
        ),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${alt.az}"/>`,
      ].join('\n');
      return [
        '  <url>',
        `    <loc>${SITE}${alt[locale]}</loc>`,
        alternates,
        '    <priority>0.9</priority>',
        '  </url>',
      ].join('\n');
    })
  );

  const guideUrls = allGuidePaths().flatMap(({ paths: alt }) =>
    locales.map((locale) => {
      const alternates = [
        ...locales.map(
          (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${alt[l]}"/>`
        ),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${alt.az}"/>`,
      ].join('\n');
      return [
        '  <url>',
        `    <loc>${SITE}${alt[locale]}</loc>`,
        alternates,
        '    <priority>0.85</priority>',
        '  </url>',
      ].join('\n');
    })
  );

  const urls = [...sharedUrls, ...serviceUrls, ...guideUrls];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
