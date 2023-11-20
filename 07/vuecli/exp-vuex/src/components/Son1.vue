<template>
  <div class="box">
    <h2>Son1 子组件</h2>
    从vuex中获取的值: <label>{{ count }}</label>
    <br>
    <button @click="handleAdd">值 + 1</button>
    <button @click="handleChange">一秒后改成666</button>

    <hr>
    {{  $store.getters.filterList }}

    <hr>
        <!-- 测试访问模块中的state-->
    <div>{{  $store.state.user.userinfo.age }}</div>
    <div>{{  $store.state.setting.theme }}</div>
    <hr>
  </div>
</template>
  
<script>
import { mapState  } from 'vuex'
export default {
  name: 'Son1Com',
  computed:{
    ...mapState(['count'])
  },
  methods:{
    handleAdd(){
      console.log('111111')
      this.$store.commit('addCount')

    },
    handleChange(){
      // 用dispatch调用action
      this.$store.dispatch('changCountAction',666)
    }
  }
}
</script>
  
<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 400px;
  padding: 10px;
  margin: 20px;
}

h2 {
  margin-top: 10px;
}
</style>