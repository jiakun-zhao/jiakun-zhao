import { minify } from 'html-minifier'
import type { Plugin } from 'vite'

export function HtmlMinify(): Plugin {
    return {
        name: 'vite-plugin-html-minify',
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
    }
}
