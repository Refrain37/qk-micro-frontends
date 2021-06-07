import request from '../utils/request'

export function fetchArticles() {
  return request({
    url: '/category/list',
    method: 'GET',
  })
}
export function editArticle(data?: any) {
  return request({
    url: '/category/edit',
    method: 'POST',
    data,
  })
}
export function delArticle(params?: any) {
  return request({
    url: '/category/del',
    method: 'GET',
    params,
  })
}
