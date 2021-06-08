import request from '../utils/request'

export function fetchArticles() {
  return request({
    url: '/article/list',
    method: 'GET',
  })
}
export function editArticle(data?: any) {
  return request({
    url: '/article/edit',
    method: 'POST',
    data,
  })
}
export function delArticle(params?: any) {
  return request({
    url: '/article/del',
    method: 'GET',
    params,
  })
}
