import axios from 'axios'
const myAxios = axios.create({
  baseURL: 'http://localhost:9999',
  timeout: '3000',
  headers: {
    Authorization: ''
  }
})
// baseURL: 'http://www.ljh789.xyz',
myAxios.interceptors.request.use((config) => {
  let token = window.localStorage.getItem('token')
  if (token != null) {
    config.headers.Authorization = token
  }
  return config
})
myAxios.interceptors.response.use(
  (res) => {
    // console.log('请求成功')
    return res
  },
  (error) => {
    // console.log(error.response.data.message)
    return error
  }
)
export default myAxios
