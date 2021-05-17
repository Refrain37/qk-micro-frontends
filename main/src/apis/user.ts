import request from '../utils/request'

export function login(params: any) {
  return request({
    url: '/user/login',
    method: 'get',
    params
  })
}

export function getInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'get'
  })
}
