import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ridgeline-concrete-company.netlify.app',
  integrations: [tailwind()],
});
