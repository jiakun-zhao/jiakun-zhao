import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Plugins from './plugins'

export default defineConfig({
    plugins: [
        Vue(),
        UnoCSS(),
        Plugins(),
    ],
    resolve: {
        alias: { '~': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    server: {
        host: true,
    },
})
