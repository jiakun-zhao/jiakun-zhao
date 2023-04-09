import { defineConfig } from 'astro/config'
import { visit } from 'unist-util-visit'
import { fileURLToPath } from 'node:url'
import { minify } from 'html-minifier'
import glob from 'fast-glob'
import { readFile, writeFile } from 'node:fs/promises'
import { parseHtml } from '@jiakun-zhao/parse-html'

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
                    // visit(tree, 'html', node => {
                    //     if (/<iframe.+music\.163\.com.+><\/iframe>/.test(node.value)) {
                    //         node.value = `<div class="NetEase-CloudMusic-Card">${node.value}</div>`
                    //     }
                    // })
                    visit(tree, 'link', node => {
                        if (node.url.startsWith('http')) {
                            const data = node.data || (node.data = {})
                            const props: any = data.hProperties || (data.hProperties = {})
                            props.target = '_blank'
                        }
                    })
                    visit(tree, 'html', node => {
                        if (node.value.startsWith('<NetEaseCloudMusicCard')) {
                            const {
                                attribute: { artist, cover, name, src },
                            } = parseHtml(node.value.replaceAll('\n', ''))
                            if (artist && cover && name && src) {
                                node.value = `<div class="NetEaseCloudMusicCard" >
                                    <img src="${cover}"/>
                                    <div><strong>${name}</strong><span>${artist}</span></div>
                                    <div class="icon"></div>
                                    <audio controls src="${src}"></audio>
                                </div>`
                            } else {
                                node.value = ''
                            }
                        }
                    })
                }
            },
        ],
    },
})
