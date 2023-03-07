<script lang="ts" setup>
interface Project {
    name: string
    src: string
    desc: string
    icon: string
    isWIP: boolean
}

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
    src: 'https://github.com/jiakun-zhao/eslint-config',
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
</script>

<template>
    <h3 h>PROJECTS</h3>
    <div flex="~ col" gap-10>
        <a
            v-for="project of projects" :key="project.name"
            :href="project.src" target="_blank"
            flex gap-6 box-border
        >
            <div h-8 w-8 :class="project.icon"></div>
            <div flex-1>
                <h4 m-0 h>
                    <span v-if="project.isWIP" text-primary>WIP </span>
                    <span>{{ project.name }}</span>
                </h4>
                <p text-xs m-0 mt-3>{{ project.desc }}</p>
            </div>
        </a>
    </div>
</template>
