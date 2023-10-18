<template>
  <div class="app" style="border: 3px solid #000; margin: 10px">
    我是APP组件
    <!-- 1.给组件标签，添加属性方式 赋值 -->
    <!-- 2.父组件对子组件的消息进行监听-->
    <Son :title="myTitle" @changeTitle="handleChange"></Son>
  </div>
</template>

<script>
import Son from './components/Son.vue'
export default {
  name: 'App',
  data() {
    return {
      myTitle: '学前端，就来黑马程序员',
    }
  },
  // 3. 提供处理函数
  methods:{
    // 可以直接拿到子组件的形参
    handleChange(NewTitle){
      console.log(NewTitle)
      this.myTitle=NewTitle
    }
  },
  components: {
    Son,
  },
}
</script>

<style>
</style>