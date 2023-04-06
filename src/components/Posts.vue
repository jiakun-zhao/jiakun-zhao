<script lang="ts" setup>
import type { RouteRecordNormalized } from 'vue-router'
import { useRouter } from 'vue-router'

function getDate(route: RouteRecordNormalized) {
    return new Date(route.meta.frontmatter.date).getTime()
}
const routes = useRouter().getRoutes()
    .filter(({ path, meta }) =>
        path.startsWith('/post/') && meta.frontmatter.title && meta.frontmatter.date,
    )
    .sort((a: RouteRecordNormalized, b: RouteRecordNormalized) => (getDate(a) - getDate(b)))
    .map(({ path, meta }) => ({ path, title: meta.frontmatter.title }))
</script>

<template>
    <ul>
        <li v-for="route of routes" :key="route.path">
            <RouterLink :to="route.path">{{ route.title }}</RouterLink>
        </li>
    </ul>
</template>
