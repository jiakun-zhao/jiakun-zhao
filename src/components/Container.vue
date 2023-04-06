<script lang="ts" setup>
import { useTitle } from '@vueuse/core'
import { useHead } from '@vueuse/head'
import { computed, onMounted, ref } from 'vue'

const props = defineProps<{ frontmatter: any }>()
const mainEl = ref<HTMLElement>()

const date = computed<string | undefined>(() => props.frontmatter.date)
useTitle(() => props.frontmatter.title)
useHead(() => ({
    meta: [
        { property: 'og:title', content: props.frontmatter.title ?? 'Jiakun Zhao' },
        { property: 'og:image', content: props.frontmatter.image ?? 'https://zhaojiakun.cn/avatar.jpg' },
        { name: 'description', content: props.frontmatter.description ?? 'Jiakun Zhao\'s Portfolio' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:creator', content: '@zhaojiakun_cn' },
    ],
}))

onMounted(() => {
    mainEl.value?.querySelectorAll('a[href^=http]').forEach((item: Element) => {
        item.setAttribute('target', '_blank')
    })
})
</script>

<template>
    <header mb-16>
        <div font-900 text-3xl text-primary>{{ frontmatter.title }}</div>
        <div v-if="date" text-sm mt-8>Update at: {{ date }}</div>
    </header>
    <main ref="mainEl">
        <slot />
    </main>
    <footer mt-32 text-sm text-secondary>Jiakun Zhao © 2023</footer>
</template>
