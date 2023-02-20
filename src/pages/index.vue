<script lang="ts" setup>
import { avarar_src, github_repo_url, github_url, mail, mail_url, name, tags } from '~/assets/static.json'
</script>

<template>
    <div flex flex-col items-center justify-center mt-20vh>
        <img h-32 rounded-full w-32 :src="avarar_src" alt="Avatar" />
        <RouterLink font-bold mt-6 text-2xl text-black dark:text-white to="/resume">{{ name }}</RouterLink>
        <a mt-3 text-sm :href="mail_url">{{ mail }}</a>
        <ul flex mt-6 list-none>
            <li v-for="(i, idx) of tags" :key="idx" bg-gray:15 cursor-default mx-3px px-6px py-3px rounded-4px text-xs>
                {{ i }}
            </li>
        </ul>
        <div mt-4 text-xl>
            <RouterLink px-2 to="/bookmarks" title="Bookmarks">
                <div class="i-ph:bookmarks-duotone"></div>
            </RouterLink>
            <a px-2 href="https://seclusion.life" title="莘野 SECLUSION." target="_blank">
                <div class="i-ph:balloon-duotone"></div>
            </a>
            <a px-2 :href="`${github_repo_url}/issues/created_by/jiakun-zhao`" title="Notes" target="_blank">
                <div class="i-ph:notepad-duotone"></div>
            </a>
            <a px-2 :href="github_url" title="GitHub" target="_blank">
                <div class="i-ph:github-logo-duotone"></div>
            </a>
        </div>
    </div>
</template>
