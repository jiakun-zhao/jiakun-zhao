import { defineConfig } from 'astro/config'
import { visit } from 'unist-util-visit'

export default defineConfig({
    server: {
        host: true,
    },
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
