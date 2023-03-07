<script lang="ts" setup>
interface Link {
    icon: string
    title: string
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
</script>

<template>
    <div my-16 flex gap-2>
        <a
            v-for="link of links" :key="link.src"
            :href="link.src" :title="link.title"
            :target="link.src.startsWith('http') ? '_blank' : '_self'"
            p-2 bg-primary:10 rounded-1.5
        >
            <div :class="link.icon"></div>
        </a>
    </div>
</template>
