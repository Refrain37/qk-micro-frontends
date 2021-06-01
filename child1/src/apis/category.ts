import request from '../utils/request'

export function fetchCategories() {
  return request({
    url: '/category/list',
    method: 'GET',
  })
}
