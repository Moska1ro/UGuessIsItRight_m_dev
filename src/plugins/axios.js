import axios from 'axios'

const instance = axios.create({
  // baseURL: '/api',
  baseURL: 'http://127.0.0.1:4523/m1/4124489-0-default',
  timeout: 3000,
})

// 添加请求拦截器
instance.interceptors.request.use((conf) => {
  // 在发送请求之前做些什么
  return conf
}, (err) => {
  // 对请求错误做些什么
  return Promise.reject(err);
})

// 添加响应拦截器
instance.interceptors.response.use((res) => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return res
}, (err) => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  if (err.response.status === 401) {
    window.location.href = '/login'
  }
  return Promise.reject(err)
})

export default instance
