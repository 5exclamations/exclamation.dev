import { defineConfig } from 'astro/config';
import { copyFile, readdir } from 'node:fs/promises';

/**
 * Cloudflare Pages picks an error page by walking up from the requested path
 * looking for `404.html`. Astro only special-cases the root `404.astro`; the
 * localised ones build to `ru/404/index.html`, which that walk never finds, so
 * a miss under /ru/ would be answered in Azerbaijani.
 *
 * This copies each localised 404 to the sibling `404.html` the walk expects.
 * The directory version stays where it is — it is a real, linkable page and
 * the language switcher moves between them.
 */
const localisedErrorPages = () => ({
  name: 'localised-404',
  hooks: {
    'astro:build:done': async ({ dir, logger }) => {
      for (const locale of ['ru', 'en']) {
        const from = new URL(`${locale}/404/index.html`, dir);
        const to = new URL(`${locale}/404.html`, dir);
        await copyFile(from, to);
        logger.info(`wrote ${locale}/404.html for the Cloudflare error-page lookup`);
      }
      const names = await readdir(dir);
      if (!names.includes('404.html')) throw new Error('root 404.html is missing');
    },
  },
});

export default defineConfig({
  site: 'https://exclamationdev.com',
  output: 'static',
  i18n: {
    defaultLocale: 'az',
    locales: ['az', 'ru', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  build: { inlineStylesheets: 'auto' },
  devToolbar: { enabled: false },
  integrations: [localisedErrorPages()],
});
