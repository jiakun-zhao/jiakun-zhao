<script lang="ts" setup>
interface FindMe {
    name: string
    src: string
}

const fineMe: FindMe[] = [{
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
    <h3 mt-16 h>FIND ME</h3>
    <div flex="~ col" gap-8>
        <a v-for="item of fineMe" :key="item.name" :href="item.src" target="_blank">{{ item.name }}</a>
    </div>
</template>
