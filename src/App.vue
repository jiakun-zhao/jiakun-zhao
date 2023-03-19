<script lang="ts" setup>
import type { Link } from '~/types'

const links: Link[] = [
    {
        name: 'Notes',
        src: 'https://github.com/jiakun-zhao/jiakun-zhao/issues/created_by/jiakun-zhao',
    },
    {
        name: 'GitHub',
        src: 'https://github.com/jiakun-zhao',
    },
    {
        name: 'Twitter',
        src: 'https://twitter.com/zhaojiakun_cn',
    },
    {
        name: 'BiliBili',
        src: 'https://space.bilibili.com/35245056',
    },
    {
        name: 'Dribbble',
        src: 'https://dribbble.com/jiakun-zhao',
    },
    {
        name: 'Unsplash',
        src: 'https://unsplash.com/@zhaojiakun',
    },
    {
        name: 'Mastodon',
        src: 'https://mas.to/@zhaojiakun',
    },
]
</script>

<template>
    <div max-w-2xl mx-auto px-8 py-32 text-primary>
        <h1 index-header>Jiakun Zhao</h1>
        <div text-sm>
            <p my-4 mt-12>Front-end developer / Graphic designer</p>
            <p my-4>Currently working on WeChat applet development.</p>
            <p my-4>Struggling to learn English...</p>

            <p mt-12>
                <a href="mailto:jiakun.zhao@outlook.com">jiakun.zhao@outlook.com</a>
            </p>
        </div>

        <img src="https://s2.loli.net/2023/03/16/x8hNBFnHb1Ra3fk.jpg" alt="cover" w="2/3" aspect="1/1" mt-12 bg-primary:10 />

        <h4 mt-16 index-header>Content || Find me</h4>
        <div flex="~ col" gap-6 text-sm>
            <a v-for="item of links" :key="item.name" :href="item.src" target="_blank">{{ item.name }}</a>
        </div>
        <footer mt-32 text-sm>Jiakun Zhao © {{ new Date().getFullYear() }}</footer>
    </div>
</template>

<style>
a {
    color: inherit;
    width: min-content;
    border-bottom: 1px dashed currentColor;
    text-decoration: none;
    transition: all 200ms linear;
}

a:hover {
    opacity: 0.5;
}

@font-face {
    font-family: JetBrainsMono;
    src: url(https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff2/JetBrainsMono-Regular.woff2) format('woff2');
    font-weight: normal;
    font-display: swap;
}

@font-face {
    font-family: JetBrainsMono;
    src: url(https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff2/JetBrainsMono-Bold.woff2) format('woff2');
    font-weight: bold;
    font-display: swap;
}

@font-face {
    font-family: JetBrainsMono;
    src: url(https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff2/JetBrainsMono-Italic.woff2) format('woff2');
    font-style: italic;
    font-display: swap;
}

@font-face {
    font-family: JetBrainsMono;
    src: url(https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff2/JetBrainsMono-Bold-Italic.woff2) format('woff2');
    font-weight: bold;
    font-style: italic;
    font-display: swap;
}

::selection {
    color: white;
    background-color: #6054ba;
}
</style>
