import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import UnoCSS from 'unocss/vite'

import { UnoConfig, VitePlugins } from './use'

export default defineConfig({
    plugins: [
        Vue(),
        Pages({ dirs: [{ dir: 'src/pages', baseRoute: '' }] }),
        UnoCSS(UnoConfig),
        VitePlugins(),
    ],
    resolve: {
        alias: { '~': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    server: {
        host: true,
    },
})
