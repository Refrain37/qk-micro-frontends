import router from './router'
import { getToken } from './utils/auth'

router.beforeEach((to, form, next) => {
  const token = getToken()
  console.log(token)
  if (token !== '' && token !== undefined) {
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
