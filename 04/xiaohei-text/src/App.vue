<template>
  <!-- 主体区域 -->
  <section id="app">
   <TodoHeader @add='handleAdd'></TodoHeader>
    <TodoBody @del='handleDel' :list="list"></TodoBody>
    <TodoFooter :result="list" @clear="clear"></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from './components/Header.vue' 
import TodoBody from './components/Body.vue'
import TodoFooter from './components/Footer.vue'
/**
 * 1. 渲染功能
      数据尽量提供在公共接口，因为很多的子组件都用到了
      父组件传到子组件

    2. 添加内容
      拿到数据 v-model 双向绑定 
      回车和点击都监听数据
      子传父，将数据传递会app.vue
      unshift增加数据

    3. 删除功能
       1，监听点击事件  
       2. 子传父，直接删除的id传递给app.vue

    4. 底部合计   
    父传子

    5. 清空功能，
    子传父

    6. 持久化存储
    watch
 * 
 */

export default {
  data () {
    return {
      list:JSON.parse(localStorage.getItem('list'))||[
        {id : 1 , name:'打篮球'},
        {id : 2 , name:'踢足球'},
        {id : 3 , name:'看电影'},
      ]
    }
  },
  watch:{
      list:{
        deep:true,
        handler(newValue){
              localStorage.setItem('list',Json.stringify(newValue))
        }
      }
  },
  
  components:{
    TodoHeader,
    TodoBody,
    TodoFooter
  },
  methods:{
    handleAdd(todoName){
      console.log(todoName)
        this.list.unshift({
          id: +new Date(),
          name:todoName
        })
    },
    handleDel(id){
      // console.log(id)
      this.list=this.list.filter(item=> item.id!=id)
    },
    clear(){
      this.list=[]
    }
  }
}
</script>

<style>

</style>
