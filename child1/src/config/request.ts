const host: string = 'http://localhost'
const port: number = 3000
const path: string = '/child1/api'

export default {
  baseURL: process.env.VUE_APP_BASE_API || `${host}:${port}${path}`,
  timeout: 3000,
}
