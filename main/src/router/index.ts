import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '../layout/index.vue'
import Home from '../views/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/login',
    name:'login',
    component:() => import('../views/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
