import axios from 'axios'
import requestConfig from '../config/request'
import store from '@/store'

const service = axios.create(requestConfig)

service.interceptors.request.use(
  config => {
    const token = (store.state as any).microState?.token
    if (token) {
      config.headers['authorization'] = 'Bearer ' + token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
