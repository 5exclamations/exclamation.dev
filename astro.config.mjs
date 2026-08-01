import { defineConfig } from 'astro/config';

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
});
