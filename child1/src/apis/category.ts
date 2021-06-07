import request from '../utils/request'

export function fetchCategories(params?: any) {
  return request({
    url: '/category/list',
    method: 'GET',
    params,
  })
}
