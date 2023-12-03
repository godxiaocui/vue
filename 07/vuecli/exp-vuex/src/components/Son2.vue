<template>
    <div class="box">
      <h2>Son2 子组件</h2>
      从vuex中获取的值:<label></label>
      <br />
      <button @click="handleSub(5)">值 - 5</button>
      <button @click="addCount()">值 - 1</button>
      <button @click="changCountAction(888)">1秒啊变成888</button>
      <div>{{ filterList }}</div>
      <hr>
      <!-- 访问模块中的state-->
      <div> {{ user }}</div>
      <div> {{ set ting }}</div>
    </div>
  </template>
  
  <script>
  import { mapActions ,mapState ,mapGetters,mapMutations} from 'vuex';
  export default {
    name: 'Son2Com',
    computed:{
      //mapgetters和mapState都是映射属性
      ...mapState(['count','user','setting']),
      ...mapGetters(['filterList'])
    },
    methods:{
      handleSub(n){
        this.$store.commit('subConut',n)
      },
      // mapmutations和mapActions 都是映射方法
      ...mapActions(['changCountAction']),
      ...mapMutations(['addCount'])
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