import { createApp } from 'vue'
import { RouterView, createRouter, createWebHistory } from 'vue-router'

import routes from '~pages'

import '~/assets/index.scss'
import 'uno.css'

const app = createApp(RouterView)
app.use(createRouter({ history: createWebHistory(), routes }))
app.mount('#app')
