import axios from 'axios'
import { getGlobalState } from './microState'
import requestConfig from '../config/request'

const service = axios.create(requestConfig)

function getToken() {
  return getGlobalState('token')
}

export default service
