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
    path: '/articles/editor',
    name: 'articleEditor',
    component: () => import('../views/articleEditor/index.vue'),
  },
  {
    path: '/test',
    name: 'test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/test.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(isSingle ? '/' : activeRule),
  routes,
})

export default router
