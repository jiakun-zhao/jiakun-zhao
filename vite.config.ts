import { URL, fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { readFileSync } from 'node:fs'
import { defineConfig } from 'vite'

import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Pages from 'vite-plugin-pages'
import Markdown from 'vite-plugin-vue-markdown'
import MarkdownItShiki from 'markdown-it-shiki'

import matter from 'gray-matter'

import Plugins from './plugins'

export default defineConfig({
    plugins: [
        Vue({ include: [/\.vue$/, /\.md$/] }),
        UnoCSS(),
        Plugins(),
        Pages({
            extensions: ['vue', 'md'],
            extendRoute(route) {
                const path = resolve(__dirname, route.component.slice(1))
                if (path.endsWith('.md')) {
                    const md = readFileSync(path, 'utf-8')
                    const { data } = matter(md)
                    route.meta = Object.assign(route.meta || {}, { frontmatter: data })
                }
                return route
            },
        }),
        Markdown({
            wrapperComponent: 'Container',
            markdownItOptions: {
                quotes: '""\'\'',
            },
            markdownItSetup(md) {
                md.use(MarkdownItShiki, {
                    theme: { dark: 'vitesse-dark', light: 'vitesse-light' },
                    highlightLines: true,
                })
            },
        }),
    ],
    resolve: {
        alias: { '~': fileURLToPath(new URL('./src', import.meta.url)) },
    },
    server: {
        host: true,
    },
})
