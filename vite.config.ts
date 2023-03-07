import { URL, fileURLToPath } from 'node:url'
import type { Plugin } from 'vite'
import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import JsDelivr from 'vite-plugin-jsdelivr'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

const CSS: Plugin = {
    name: 'vite-plugin-css',
    apply: 'build',
    config() {
        return {
            css: {
                postcss: {
                    plugins: [cssnano({ preset: 'default' }), autoprefixer],
                },
            },
        }
    },
}

export default defineConfig({
    plugins: [
        Vue(),
        UnoCSS({
            presets: [
                presetUno({ dark: 'media', preflight: false }),
                presetAttributify(),
                presetIcons({
                    scale: 1.2,
                    extraProperties: { 'display': 'inline-block', 'vertical-align': 'bottom' },
                }),
            ],
            theme: { colors: { primary: '#767676', dark: '#191919' } },
            shortcuts: {
                h: 'text-dark dark:text-light mb-8',
            },
        }),
        JsDelivr(),
        CSS,
    ],
    resolve: {
        alias: { '~': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    server: {
        host: true,
    },
})
