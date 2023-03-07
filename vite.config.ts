import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import UnoCSS from 'unocss/vite'
import JsDelivr from 'vite-plugin-jsdelivr'
import { presetAttributify, presetIcons, presetUno } from 'unocss'
import { HtmlMinify, Styles } from './plugins'

export default defineConfig({
    plugins: [
        Vue(),
        Pages({ dirs: [{ dir: 'src/pages', baseRoute: '' }] }),
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
        }),

        Styles(),
        HtmlMinify(),

        JsDelivr(),
    ],
    resolve: {
        alias: { '~': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    server: {
        host: true,
    },
})
