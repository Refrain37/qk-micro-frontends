import axios from 'axios'
import store from '../store/index'
const { baseUrl } = require('../config/request')

const config = {
  baseURL: process.env.VUE_APP_BASE_API || baseUrl,
  timeout: 3000,
}

const service = axios.create(config)

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
