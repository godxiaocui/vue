import Vue from 'vue'
import VueRouter from "vue-router";
import Layout from '@/views/Layout'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path:'/',
      compoment: Layout, 
    }
  ]
})

export default router