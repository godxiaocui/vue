import axios from 'axios'
export default{
    namespaced:true,
    state (){
        return{
            // 购物车数据的值
            list:[]
        }
    },
    mutations :{
        // 更新数据的方法
        updateList(state,newList){
            state.list=newList
        },
        // 更新数据
        updateCount(state,obj){
            const goods = state.list.find(item=> item.id === obj.id)
            goods.count = obj.count
        }
    },
    actions:{
        //获取数据
        async getList(context){
            // 获取数据
            const res = await axios.get('http://localhost:3000/cart')
            console.log(res)
           // 这里调用mutation
           context.commit('updateList',res.data)
        },
        // 修改数据
        async updateData(context,obj){
                console.log(obj,context)
                const res = await axios.patch(`http://localhost:3000/cart/${obj.id}`,{
                    count:obj.count
                })
                console.log(res)
                // 重新获取一边数据比较消耗内存，所以只更新部分数据
                context.commit('updateCount',{
                    id:obj.id,
                    count:obj.count
                })
        }
    },
    getters:{
        // 总数
        total(state){
            return state.list.reduce((sum,item)=> sum+item.count,0)
        },
        // 总价
        totalPrice(state){
            return state.list.reduce((sum,item)=> sum+item.count*item.price,0)
        }

    }
}