import router from './router'
import store from './store'
import { getToken } from './utils/auth'

router.beforeEach(async (to, form, next) => {
  const token = getToken()
  if (token) {
    if (to.path === '/login') {
      next('/')
    } else {
      /* check userInfo */
      const hasSetUserInfo = store.getters.username
      if (hasSetUserInfo) {
        next()
      } else {
        try {
          // request
          await store.dispatch('user/getInfo')
          next()
        } catch (error) {
          // TODO:remove token
        }
      }
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
