import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main-layout'},
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {layout: 'main-layout'},
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/skills',
    name: 'Skills',
    meta: {layout: 'main-layout'},
    component: () => import(/* webpackChunkName: "about" */ '../views/Skills.vue')
  },
  {
    path: '/works',
    name: 'Works',
    meta: {layout: 'main-layout'},
    component: () => import(/* webpackChunkName: "about" */ '../views/MyWorks.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
