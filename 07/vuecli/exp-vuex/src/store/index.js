import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import setting from './modules/setting'

Vue.use(Vuex)
// 创建一个空的仓库，所有的组件共享数据
const store= new Vuex.Store({
  // state 可以提供所有组件共享的数据
  state:{
    title:'大标题',
    count:100,
    list:[1,2,3,4,5,6,7,8,9,10]
  },
  // 2. 通过mutations 可以提供更修改数据的方法
  // 所有mutations的第一个参数就是state
  mutations:{
    addCount(state){
      state.count+=1
    },
    subConut(state,n){
      state.count-=n
    },
    modifyCount(state,n){
      state.count=n
    }
  },
  // actions 处理异步
  // 注意这里的actions不能操作state，需要调用commit mutation 
  actions:{
    // context 上下文，这里没有分模块，就当作store 仓库
      changCountAction(context,num){
          setTimeout(() => {
            context.commit('modifyCount',num)
          }, 1099);
      }
  },
  // getters
  getters:{
    // 1. 形参第一个参数，就是state
    // 2. 必须有返回值。返回就是getters值
    filterList(state){
return state.list.filter(item=>item>5)
    }
  },
      // modules 模块可以导入数据
      modules:{
        user,
        setting
    }
})
export default store
