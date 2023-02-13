import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import UnoCSS from 'unocss/vite'
import { presetIcons, presetUno } from 'unocss'

import type { AcceptedPlugin } from 'postcss'
import autoprefixer from 'autoprefixer'
import postcssSorting from 'postcss-sorting'
import cssnano from 'cssnano'

function injectPostCSSPlugin(plugins: AcceptedPlugin[]): AcceptedPlugin[] {
    return process.env.NODE_ENV === 'production' ? plugins : []
}

export default defineConfig({
    plugins: [
        Vue(),
        Pages({ dirs: [{ dir: 'src/pages', baseRoute: '' }] }),
        UnoCSS({
            presets: [
                presetUno(),
                presetIcons({ scale: 1.2 }),
            ],
            rules: [
                ['text-c1', { color: 'var(--c1)' }],
                ['text-c2', { color: 'var(--c2)' }],
                ['text-s1', { color: 'var(--s1)' }],
                ['text-s2', { color: 'var(--s2)' }],
                ['bg-s1', { 'background-color': 'var(--s1)' }],
                ['bg-s2', { 'background-color': 'var(--s2)' }],
                ['bg-b1', { 'background-color': 'var(--b1)' }],
                ['bg-b2', { 'background-color': 'var(--b2)' }],
            ],
        }),
    ],
    resolve: {
        alias: { '~': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    server: {
        host: true,
    },
    css: {
        postcss: {
            plugins: injectPostCSSPlugin([
                postcssSorting({
                    'order': ['custom-properties', 'dollar-variables', 'declarations', 'at-rules', 'rules'],
                    'properties-order': 'alphabetical',
                    'unspecified-properties-position': 'bottom',
                }),
                cssnano({ preset: 'default' }),
                autoprefixer,
            ]),
        },
    },
})
