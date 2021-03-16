import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import ContentPage from '@/views/ContentPage.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/score/:slug',
        name: 'score',
        component: ContentPage
    },
]

const router = new VueRouter({
    routes,
    //do NOT user mode: "history" or "abstract", we need hastags
    //mode: "history",
    mode: "hash",
})

export default router
