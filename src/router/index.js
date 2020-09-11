import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'index',
        component: () =>
            import ( /* webpackChunkName: "index" */ '../views/Index.vue')
    },
    {
        path: '/list',
        name: 'List',
        component: () =>
            import ( /* webpackChunkName: "list" */ '../views/List.vue')
    },
    {
        path: '/car',
        name: 'Car',
        component: () =>
            import ( /* webpackChunkName: "car" */ '../views/Car.vue')
    },
    {
        path: '/find',
        name: 'Find',
        component: () =>
            import ( /* webpackChunkName: "find" */ '../views/Find.vue')
    },
    {
        path: '/my',
        name: 'My',
        component: () =>
            import ( /* webpackChunkName: "my" */ '../views/My.vue')
    },
    {
        path: '/index',
        name: 'Index',
        component: () =>
            import ( /* webpackChunkName: "index" */ '../views/Index.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router