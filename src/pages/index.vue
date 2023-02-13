<script lang="ts" setup>
import { avarar_src, github_repo_url, github_url, mail, mail_url, name, tags } from '~/assets/static.json'
const iconPaddingVertical = 'px-[0.5rem]'
</script>

<template>
    <div class="flex flex-col items-center justify-center mt-32">
        <img class="h-32 rounded-full w-32" :src="avarar_src" alt="Avatar" />
        <RouterLink class="font-bold mt-6 text-[1.5rem] text-c1" to="/resume">{{ name }}</RouterLink>
        <a class="mt-3 text-[0.85rem]" :href="mail_url">{{ mail }}</a>
        <ul class="flex mt-6">
            <li v-for="(i, idx) of tags" :key="idx" class="bg-b2 cursor-default mx-2px px-6px py-3px rounded-4px text-[0.75rem]">
                {{ i }}
            </li>
        </ul>
        <div class="mt-5 text-[1.2rem]">
            <a :class="iconPaddingVertical" href="https://seclusion.life" title="莘野 SECLUSION." target="_blank">
                <div class="i-ph:balloon-duotone"></div>
            </a>
            <a :class="iconPaddingVertical" :href="`${github_repo_url}/issues`" title="Notes" target="_blank">
                <div class="i-ph:notepad-duotone"></div>
            </a>
            <RouterLink :class="iconPaddingVertical" to="/bookmarks" title="Bookmarks">
                <div class="i-ph:bookmarks-duotone"></div>
            </RouterLink>
            <a :class="iconPaddingVertical" :href="github_url" title="GitHub" target="_blank">
                <div class="i-ph:github-logo-duotone"></div>
            </a>
        </div>
    </div>
</template>
