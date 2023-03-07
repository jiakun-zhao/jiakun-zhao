<script lang="ts" setup>
interface Link {
    icon: string
    title: string
    src: string
}

interface Project {
    name: string
    src: string
    desc: string
    icon: string
    isWIP: boolean
}

interface Online {
    name: string
    src: string
}

const links: Link[] = [{
    icon: 'i-ph:envelope-duotone',
    title: 'Mail',
    src: 'mailto:jiakun.zhao@outlook.com',
}, {
    icon: 'i-ph:github-logo-duotone',
    title: 'GitHub',
    src: 'https://github.com/jiakun-zhao',
}, {
    icon: 'i-ph:book-duotone',
    title: 'Notes',
    src: 'https://github.com/jiakun-zhao/jiakun-zhao/issues/created_by/jiakun-zhao',
}]

const projects: Project[] = [{
    name: 'Start Page',
    src: 'https://start.seclusion.life',
    desc: 'JUST SEARCH!',
    icon: 'i-ph:magnifying-glass-duotone',
    isWIP: true,
}, {
    name: 'Video Cover',
    src: 'https://video-cover.zhaojiakun.cn',
    desc: 'A simple video cover generator.',
    icon: 'i-ph:video-camera-duotone',
    isWIP: false,
}, {
    name: 'eslint-config',
    src: 'https://github.com/jiakun-zhao/eslint-confi',
    desc: 'From antfu, and then more in line with my habits.',
    icon: 'i-mdi:eslint',
    isWIP: false,
}, {
    name: 'vite-plugin-jsdelivr',
    src: 'https://github.com/jiakun-zhao/vite-plugin-jsdelivr',
    desc: 'A Vite plugin to use jsDelivr as CDN.',
    icon: 'i-ph:plug-duotone',
    isWIP: false,
}]

const online: Online[] = [{
    name: 'BiliBili',
    src: 'https://space.bilibili.com/35245056',
}, {
    name: 'Dribbble',
    src: 'https://dribbble.com/jiakun-zhao',
}, {
    name: 'Unsplash',
    src: 'https://unsplash.com/@zhaojiakun',
}, {
    name: 'Mastodon',
    src: 'https://mas.to/@zhaojiakun',
}]
</script>

<template>
    <div max-w-2xl mx-auto px-8 py-32 font-mono>
        <h1>Jiakun Zhao</h1>
        <p mt-10 text-primary>Designer / Developer</p>
        <p text-primary>Engaged in WeChat applet development.</p>
        <p text-primary>Working hard to learn English...😢</p>
        <!-- <h3 mt-24>CORE</h3> -->
        <div my-16 flex gap-2>
            <a
                v-for="link of links" :key="link.src"
                :href="link.src" :title="link.title"
                :target="link.src.startsWith('http') ? '_blank' : '_self'"
                p-2 text-primary bg-primary:10 hover:opacity-60 rounded-1.5
            >
                <div :class="link.icon"></div>
            </a>
        </div>
        <h3 mb-8>PROJECTS</h3>
        <div flex="~ col" gap-10>
            <a
                v-for="project of projects" :key="project.name"
                :href="project.src" target="_blank"
                flex gap-6 box-border underline-transparent rounded-1.5
                text-primary hover:opacity-40
            >
                <div h-8 w-8 :class="project.icon"></div>
                <div flex-1>
                    <h4 m-0>
                        <span v-if="project.isWIP" text-primary>WIP </span>
                        <span text-dark dark:text-light>{{ project.name }}</span>
                    </h4>
                    <p text-primary text-xs m-0 mt-3>{{ project.desc }}</p>
                </div>
            </a>
        </div>
        <h3 mt-16 mb-8>FIND ME</h3>
        <div flex="~ col" gap-8>
            <a
                v-for="i of online" :key="i.name" :href="i.src"
                target="_blank" text-primary hover:opacity-40
            >{{ i.name }}</a>
        </div>
        <footer mt-32 text-sm text-primary>
            Jiakun Zhao © {{ new Date().getFullYear() }}
        </footer>
    </div>
</template>
