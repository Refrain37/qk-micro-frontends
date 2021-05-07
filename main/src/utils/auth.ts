import Cookies from 'js-cookie'

const KEY: string = 'token'

export function getToken() {
  return Cookies.get(KEY)
}

export function setToken(token: string) {
  return Cookies.set(KEY, token)
}

export function deleteToken() {
  return Cookies.remove(KEY)
}
