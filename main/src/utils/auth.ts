import Cookies from 'js-cookie'
import { getGlobalState, updateGlobalState } from './microState'

const KEY: string = 'token'

export function getToken() {
  return getGlobalState(KEY) || Cookies.get(KEY)
}

export function setToken(token: string) {
  updateGlobalState(KEY, token)
  return Cookies.set(KEY, token)
}

export function deleteToken() {
  updateGlobalState(KEY, null)
  return Cookies.remove(KEY)
}
