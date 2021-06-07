import request from '../utils/request'

export function upload(data: any) {
  return request({
    url: '/upload',
    method: 'post',
    data,
  })
}
