// 封装axios, 设置请求请求拦截器和响应拦截器
// 用来写接口函数的
// 引入axios
import axios from 'axios'
// 引入nprogress
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import {
  AJAX_BASE_URL,
  AJAX_TIMEOUT
} from '../config'

// 配置一个通用的基础路径, 和请求超时的时间
const ajax = axios.create({
  baseURL: AJAX_BASE_URL, // 默认路径
  timeOut: AJAX_TIMEOUT // 请求超时时间
})

// 请求拦截器
axios.interceptors.request.use(config => {
  // 请求显示进度条
  Nprogress.start() // 显示进度条
  return config
})

// 响应拦截器
axios.interceptors.response.use(response => {
  // 响应隐藏进度条
  Nprogress.done()
  // 响应成功后返回的是数据(data)
  return response.data
}, err => {
  // 响应隐藏进度条
  Nprogress.done()
  alert('请求错误' + err.message || '未知错误');
  // return new Promise(() => {}) // 中断Promise链, 停止具体的请求
  return Promise.reject(err) // 返回失败的Promise
})

// 暴露
export default ajax