// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Without this, Astro.url resolves to the build origin and og:url ships as
  // http://localhost:4321/. It also seeds the sitemap's absolute URLs.
  site: 'https://pavittarx.com',

  // /design is an internal token reference, not content for search.
  integrations: [sitemap({ filter: (page) => !page.includes('/design') })],

  vite: {
    plugins: [tailwindcss()]
  }
});
