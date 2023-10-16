// 导入app.vue 基于app.vue创建结构渲染index.html
// 1. 导入vue核心包
import Vue from 'vue'
// 2. 导入app.vue跟组件
import App from './App.vue'

// 导入全局组件
import HmButton from './components/HmButton.vue'
//全局注册
Vue.component('HmButton',HmButton)
// 提示： 当前处于什么环境（生产/开发）
Vue.config.productionTip = false

// 3.vue实例化，提供render方法，基于app.vue创建结构渲染index.html
new Vue({
  // el:'#app' 作用和$mount（'选择器'）作用一致，用于指定vue所管理容器
  // render: h => h(App), 等于下面的写法简写
  render: (createElement)=>{
    return createElement(App)
  }
}).$mount('#app')
