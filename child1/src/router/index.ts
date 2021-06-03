import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import { isSingle } from '../micro'
import { activeRule } from '../config/micro'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('../views/categories/index.vue'),
  },
  {
    path: '/data/charts',
    name: 'charts',
    component: () => import('../views/charts/index.vue'),
  },
  {
    path: '/data/map',
    name: 'map',
    component: () => import('../views/map/index.vue'),
  },
  {
    path: '/article/editor',
    name: 'articleEditor',
    component: () => import('../views/articleEditor/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(isSingle ? '/' : activeRule),
  routes,
})

export default router
