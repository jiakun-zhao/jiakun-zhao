import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import UnoCSS from 'unocss/vite'
import ImportCDN from '@jiakun-zhao/vite-plugin-cdn'

import { UnoConfig, VitePlugins } from './use'

export default defineConfig({
    plugins: [
        Vue(),
        Pages({ dirs: [{ dir: 'src/pages', baseRoute: '' }] }),
        UnoCSS(UnoConfig),
        VitePlugins(),
        ImportCDN({
            url: 'https://welostyou.host/npm/',
            modules: [
                { name: 'vue', var: 'Vue', path: 'dist/vue.runtime.global.prod.js' },
                { name: 'vue-router', var: 'VueRouter', path: 'dist/vue-router.global.prod.js' },
                { name: '@vueuse/core', var: 'VueUse', path: 'index.iife.min.js' },
                { name: '@vueuse/shared', var: 'VueUse', path: 'index.iife.min.js' },
            ],
        }),
    ],
    resolve: {
        alias: { '~': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    server: {
        host: true,
    },
})
