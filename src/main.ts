import { createApp } from 'vue'
import { RouterView, createRouter, createWebHistory } from 'vue-router'

import routes from '~pages'

import '~/assets/styles.css'
import 'uno.css'

const router = createRouter({ history: createWebHistory(), routes })

const app = createApp(RouterView)
app.use(router)
app.mount('#app')
