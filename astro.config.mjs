// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://danielheuser.com',
    base: '/',
    output: 'static',
    build: {
        assets: 'assets'
    }
});
