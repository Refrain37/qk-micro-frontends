import axios from 'axios'
const { baseUrl } = require('../config/request')
import { getToken } from './auth'

const config = {
  baseURL: process.env.VUE_APP_BASE_API || baseUrl,
  timeout: 3000
}

const service = axios.create(config)
service.interceptors.request.use(
  config => {
    const token = getToken()
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
