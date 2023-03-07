<script lang="ts" setup>
import Header from '~/components/Header.vue'
import Links from '~/components/Links.vue'
import Projects from '~/components/Projects.vue'
import FindMe from '~/components/FindMe.vue'
</script>

<template>
    <Header />
    <Links />
    <Projects />
    <FindMe />
    <footer mt-32 text-sm>Jiakun Zhao © {{ new Date().getFullYear() }}</footer>
</template>

<style>
a {
    color: inherit;
    text-decoration: none;
    transition: all 200ms linear;
}

a:hover {
    opacity: 0.4;
}

::selection {
    color: white;
    background-color: #6054ba;
}
</style>
