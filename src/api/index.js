import axios from 'axios'
const liServise = axios.create({
  baseURL: 'http://localhost:9999',
  timeout: '3000',
  headers: {
    Authorization: ''
  }
})
// baseURL: 'http://www.ljh789.xyz',
liServise.interceptors.request.use((config) => {
  let token = window.localStorage.getItem('token')
  if (token != null) {
    config.headers.Authorization = token
  }
  return config
})
liServise.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    return error
  }
)
export default liServise
