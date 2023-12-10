/* 封装axios用于发送请求 */
import axios from 'axios'
import { Toast } from 'vant'
import store from '@/store'
// 创建一个新的axios实例
const request = axios.create({
  baseURL: 'http://cba.itlike.com/public/index.php?s=/api/',
  timeout: 5000
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 开启loading，禁止点击(节流处理。防止多次无效出发)
    Toast.loading({
      message:'加载中。。。。',
      forbidClick:true,
      duration:0 // 不会自动消失
    })
    //   请求头带上token
    const token =store.getters.token
    if(token){
      config.headers['Access-Token'] = token
      config.headers.platform = 'H5'
    }
    return config
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  })
  
  // 添加响应拦截器
  request.interceptors.response.use(function (response) {
    // 对响应数据做点什么,(默认会多一个data)
    const res =response.data
    if(res.status!==200){
        Toast(res.message)
        // 抛出一个错误的promise
        return Promise.reject(res.message)
    }else{
      Toast.clear()
    }
    return response.data
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  })
  
  export default request