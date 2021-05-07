import router from './router'
import { getToken, deleteToken } from './utils/auth'
import { getInfo } from './apis/user'
import { getGlobalState, updateGlobalState } from './utils/microState'

router.beforeEach(async (to, form, next) => {
  const token = getToken()
  if (token) {
    if (to.path === '/login') {
      next('/')
    } else {
      /* check userInfo */
      const userInfo = getGlobalState('userInfo')
      if (userInfo) {
        next()
      } else {
        // request userInfo
        try {
          const res = await getInfo()
          res.status === 200 &&
            updateGlobalState('userInfo', JSON.stringify(res.data.data))
          next()
        } catch (error) {
          deleteToken()
          next('/login')
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
