import axios from 'axios'
import { getGlobalState } from './microState'
const { baseUrl } = require('../config/request')

const config = {
  baseURL: process.env.VUE_APP_BASE_API || baseUrl,
  timeout: 3000
}

const service = axios.create(config)

function getToken() {
  return getGlobalState('token')
}

export default service
