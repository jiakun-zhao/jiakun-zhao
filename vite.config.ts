import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import UnoCSS from 'unocss/vite'
import { presetIcons } from 'unocss'

export default defineConfig({
    plugins: [
        Vue(),
        Pages({ dirs: [{ dir: 'src/pages', baseRoute: '' }] }),
        UnoCSS({ presets: [presetIcons({ scale: 1.2 })] }),
    ],
    resolve: {
        alias: { '~': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    server: {
        host: true,
    },
})
