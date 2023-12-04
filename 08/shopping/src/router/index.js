import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
import Search from '@/views/search'
import SearchList from '@/views/search/list'
import ProDetail from '@/views/prodetail'
import Login from '@/views/login'
import Pay from '@/views/pay'
import MyOrder from '@/views/myorder'

import Home from '@/views/layout/home'
import Category from '@/views/layout/category'
import Cart from '@/views/layout/cart'
import User from '@/views/layout/user'
import store from '@/store'

Vue.use(VueRouter)



const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path:'/home',
          component: Home
        },
        {
          path: '/category',
          component: Category
        },
        {
          path: '/cart',
          component: Cart
        },
        {
          path: '/user',
          component: User
        }
      ]
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/searchlist',
      component: SearchList
    },
    // 动态路由传参
    {
      path: '/prodetail/:id',
      component: ProDetail
    },
    {
      path: '/pay',
      component: Pay
    },
    {
      path: '/myorder',
      component: MyOrder
    }
  ]
})

  // 1. to   往哪里去， 到哪去的路由信息对象  
  // 2. from 从哪里来， 从哪来的路由信息对象
  // 3. next() 是否放行
  //    如果next()调用，就是放行
  //    next(路径) 拦截到某个路径页面
// 权限路径
const authUrl = ['/pay', '/myorder']
router.beforeEach((to,from,next)=>{
  //看 to.path是否有权限
  if(!authUrl.includes(to.path)){
    next()
    return
  }else{
      // 拿到token
    const token = store.getters.token
    console.log(token)
    if(token){
      next()
    }else{
      next('/login')
    }

  }
})

export default router
