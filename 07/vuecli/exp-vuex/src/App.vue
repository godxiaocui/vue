<template>
    <div id="app">
      <h1>根组件 - {{ count }}</h1>
      <input :value="count" @input="handleInput" type="text">
      <Son1></Son1>
      <hr>
      <Son2></Son2>
    </div>
  </template>
  
  <script>
  import Son1 from './components/Son1.vue'
  import Son2 from './components/Son2.vue'
  import { mapState  } from 'vuex'
  export default {
    name: 'app',
    data: function () {
      return {
  
      }
    },
    computed:{
        ...mapState(['count'])
    },
    created(){
      console.log(this.$store.state.user)
        console.log(11111)
        console.log(mapState(['count']))
    },

    components: {
      Son1,
      Son2
    },
    methods:{
      handleInput(e){
        // 字符串前面加一个+直接转成一个数字
          console.log(+e.target.value)
          this.$store.commit('modifyCount',e.target.value)
      }
    }
  }
  </script>
  
  <style>
  #app {
    width: 600px;
    margin: 20px auto;
    border: 3px solid #ccc;
    border-radius: 3px;
    padding: 10px;
  }
  </style>