import request from '../utils/request'

export function test(params: any) {
  return request({
    url: '/test',
    method: 'get',
    params,
  })
}
