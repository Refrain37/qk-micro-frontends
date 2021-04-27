import request from '../utils/request'

export function login(params: any) {
  return request({
    url: '/user/login',
    method: 'get',
    params
  })
}
