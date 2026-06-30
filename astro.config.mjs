// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const SITE_URL = 'https://lisalavigne.fr';
const SITEMAP_PATHS = new Set([
    '/',
    '/fr/',
    '/es/',
    '/a-propos/',
    '/about/',
    '/travailler-ensemble/',
    '/trabajar-juntos/',
    '/blog/',
    '/diagnostic-blocage-lisa.html',
    '/diagnostico-bloqueo-lisa.html',
]);

export default defineConfig({
    integrations: [
        tailwind(),
        sitemap({
            filter: (page) => {
                const pathname = new URL(page).pathname;
                return SITEMAP_PATHS.has(pathname) || pathname.startsWith('/blog/');
            },
            customPages: [
                `${SITE_URL}/diagnostic-blocage-lisa.html`,
                `${SITE_URL}/diagnostico-bloqueo-lisa.html`,
            ],
        }),
    ],
    vite: {
        define: {
            'import.meta.env.NOTION_API_KEY': JSON.stringify(process.env.NOTION_API_KEY),
        },
    },
    site: SITE_URL,
});
