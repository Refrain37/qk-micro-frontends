import router from './router'
import { getToken } from './utils/auth'

router.beforeEach(async (to, form, next) => {
  const token = getToken()
  if (token) {
    if (to.path === '/login') {
      next('/')
    } else {
      /* check userInfo */
      next()
    }
  } else {
    /* no token */
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }
})
