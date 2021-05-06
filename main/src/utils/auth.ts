import Cookies from 'js-cookie'
import { getGlobalState, updateGlobalState } from './microState'

const KEY: string = 'token'

export function getToken() {
  return getGlobalState('token') || Cookies.get(KEY)
}

export function setToken(token: string) {
  updateGlobalState('token', token)
  return Cookies.set(KEY, token)
}

export function deleteToken() {
  updateGlobalState('token', '')
  return Cookies.remove(KEY)
}
