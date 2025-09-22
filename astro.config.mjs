// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://Phish-N-Chips25.github.io/website',
	base: '/website',
	integrations: [mdx(), sitemap()],
});
