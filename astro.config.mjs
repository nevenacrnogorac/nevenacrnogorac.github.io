// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nevenacrnogorac.github.io',
  integrations: [react(), tailwind(), sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: {
        en: 'en',
      },
    },
    serialize(item) {
      if (item.url === 'https://nevenacrnogorac.github.io/') {
        item.changefreq = 'weekly';
        item.priority = 1.0;
      } else if (item.url === 'https://nevenacrnogorac.github.io/gallery/') {
        item.changefreq = 'weekly';
        item.priority = 0.8;
      } else {
        item.changefreq = 'weekly';
        item.priority = 0.7;
      }
      return item;
    },
  })],
})