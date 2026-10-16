// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: set your final domain. With a custom domain on GitHub Pages leave `base` unset.
// Without one, use site: 'https://<user>.github.io' and base: '/<repo>'.
export default defineConfig({
  site: 'https://alvaromanzano.github.io',
  base: '/Maria',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  image: { responsiveStyles: false },
});
