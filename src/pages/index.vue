<script lang="ts" setup>
import { avarar_src, github_repo_url, github_url, mail, mail_url, name, tags } from '~/assets/static.json'
</script>

<template>
    <div class="box flex-col">
        <img class="avatar" :src="avarar_src" alt="Avatar" />
        <RouterLink class="name" to="/resume">{{ name }}</RouterLink>
        <a class="mail" :href="mail_url">{{ mail }}</a>
        <ul class="flex tags">
            <li v-for="(i, idx) of tags" :key="idx">{{ i }}</li>
        </ul>
        <div class="links">
            <a href="https://seclusion.life" title="莘野 SECLUSION." target="_blank">
                <div class="i-ph:balloon-duotone"></div>
            </a>
            <a :href="`${github_repo_url}/issues`" title="Notes" target="_blank">
                <div class="i-ph:notepad-duotone"></div>
            </a>
            <RouterLink to="/bookmarks" title="Bookmarks">
                <div class="i-ph:bookmarks-duotone"></div>
            </RouterLink>
            <a :href="github_url" title="GitHub" target="_blank">
                <div class="i-ph:github-logo-duotone"></div>
            </a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.box {
    align-items: center;
    justify-content: center;
    margin-top: 8rem;

    .avatar {
        height: 8rem;
        widows: 8rem;
        border-radius: 50%;
    }

    .name {
        color: var(--c1);
        margin-top: 1.5rem;
        font-size: 1.5rem;
        font-weight: bold;
    }

    .mail {
        margin-top: 0.75rem;
        font-size: 0.85rem;
    }

    .tags {
        margin-top: 1.5rem;

        li {
            background-color: var(--b2);
            margin: 0 2px;
            padding: 3px 6px;
            border-radius: 4px;
            font-size: 0.75rem;
            cursor: default;
        }
    }

    .links {
        font-size: 1.2rem;
        margin-top: 1.2rem;

        a {
            padding: 0 0.5rem;
        }
    }
}
</style>
