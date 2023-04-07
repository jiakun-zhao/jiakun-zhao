import { defineConfig } from 'astro/config'
import { visit } from 'unist-util-visit'
import { fileURLToPath } from 'node:url'
import { minify } from 'html-minifier'
import glob from 'fast-glob'
import { readFile, writeFile } from 'node:fs/promises'

export default defineConfig({
    site: 'https://zhaojiakun.cn',
    build: {
        assets: 'assets',
    },
    server: {
        host: true,
    },
    integrations: [
        {
            name: 'astro-html-minifier',
            hooks: {
                'astro:build:done': async ({ dir }) => {
                    const path = fileURLToPath(dir)
                    const files = await glob(`${path}/**/*.html`)
                    for (const filePath of files) {
                        const html = await readFile(filePath, 'utf-8')
                        const minified = minify(html, {
                            removeComments: true,
                            removeAttributeQuotes: true,
                            collapseWhitespace: true,
                            minifyJS: true,
                            minifyCSS: true,
                        })
                        await writeFile(filePath, minified)
                    }
                },
            },
        },
    ],
    markdown: {
        drafts: true,
        remarkPlugins: [
            function () {
                return function (tree) {
                    visit(tree, 'html', node => {
                        if (/<iframe.+music\.163\.com.+><\/iframe>/.test(node.value)) {
                            node.value = `<div class="NetEase-CloudMusic-Card">${node.value}</div>`
                        }
                    })
                    visit(tree, 'link', node => {
                        if (node.url.startsWith('http')) {
                            const data = node.data || (node.data = {})
                            const props: any = data.hProperties || (data.hProperties = {})
                            props.target = '_blank'
                        }
                    })
                }
            },
        ],
    },
})
