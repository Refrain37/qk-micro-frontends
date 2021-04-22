import router from './router'
import { getGlobalState } from './utils/microState'

router.beforeEach((to, form, next) => {
  const token = getGlobalState('token')
  if (token !== '') {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
