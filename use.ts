import type { Plugin } from 'vite'
import type { AcceptedPlugin } from 'postcss'
import type { UserConfig } from 'unocss'
import { minify } from 'html-minifier'
import autoprefixer from 'autoprefixer'
import postcssSorting from 'postcss-sorting'
import cssnano from 'cssnano'
import { presetAttributify, presetIcons, presetUno } from 'unocss'

export const UnoConfig: UserConfig = {
    presets: [
        presetUno({ preflight: false }),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
            extraProperties: { 'display': 'inline-block', 'vertical-align': 'bottom' },
        }),
    ],
    exclude: '**/node_modules/**',
    theme: {
        colors: {
            primary: '#767676',
            secondary: '#6054ba',
            tertiary: '#d8b162',
        },
    },
}

export function VitePlugins(): Plugin[] {
    return [{
        name: 'vite-plugin-html-minify',
        enforce: 'post',
        apply: 'build',
        transformIndexHtml(html) {
            return minify(html, {
                removeComments: true,
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                minifyJS: true,
                minifyCSS: true,
            })
        },
    }, {
        name: 'vite-plugin-build-css',
        apply: 'build',
        config() {
            const plugins: AcceptedPlugin[] = [
                postcssSorting({
                    'order': ['custom-properties', 'dollar-variables', 'declarations', 'at-rules', 'rules'],
                    'properties-order': 'alphabetical',
                    'unspecified-properties-position': 'bottom',
                }),
                cssnano({ preset: 'default' }),
                autoprefixer,
            ]
            return { css: { postcss: { plugins } } }
        },
    }]
}
