import { createApp } from 'vue'
import { RouterView, createRouter, createWebHistory } from 'vue-router'
import { createHead } from '@vueuse/head'

import Container from '~/components/Container.vue'
import Posts from '~/components/Posts.vue'

import 'uno.css'
import '~/assets/styles.scss'

import routes from '~pages'

const history = createWebHistory()
const head = createHead()

const router = createRouter({ history, routes })
router.afterEach(() => window.scrollTo(0, 0))

createApp(RouterView)
    .component('Container', Container)
    .component('Posts', Posts)
    .use(router)
    .use(head)
    .mount('#container')
