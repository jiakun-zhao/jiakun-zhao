import { createApp } from 'vue'
import { RouterView, createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

import routes from '~pages'

import '~/assets/index.scss'
import 'nprogress/nprogress.css'
import 'uno.css'

const router = createRouter({ history: createWebHistory(), routes })
NProgress.configure({ showSpinner: false })
router.beforeEach(async (to, from, next) => {
    NProgress.start()
    next()
})
router.afterEach(() => NProgress.done())

const app = createApp(RouterView)
app.use(router)
app.mount('#app')
