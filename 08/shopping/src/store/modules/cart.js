import { getCartList, changeCount, delSelect } from "@/api/carts"

export default {
    namespaced: true,
    state() {
        return {
            cartList: []
        }
    },
    mutations: {
        //  设置state
        setCartList(state, newList) {
            state.cartList = newList
        },
        toggleCheck(state, goodsId) {
            //  对应id像修改
            state.cartList.forEach(item => {
                if (item.goods_id === goodsId) {
                    item.isChecked = !item.isChecked
                }
            })
        },
        toggleAllCheck(state, flag) {
            state.cartList.forEach(item => {
                item.isChecked = flag
            })
        },
        changeCount(state, { goodsId, goodsNum }) {
            const goods = state.cartList.find(item => item.goods_id === goodsId)
            goods.goods_num = goodsNum
        }
    },
    //  获取购物车列表，异步任务需要放在放在action,mutations支持同步
    actions: {
        // 获取数据
        async getCartAction(context) {
            const { data } = await getCartList()
            //  默认都是选中
            data.list.forEach(item => {
                item.isChecked = true
            })
            // 将我们的数据放到state中
            context.commit('setCartList', data.list)

        },
        // 修改数量的值
        async changeCountAction(context, obj) {
            const { goodsNum, goodsId, goodsSkuId } = obj
            console.log(goodsNum, goodsId, goodsSkuId)
            const res = await changeCount(goodsId, goodsNum, goodsSkuId)
            if (res.status === 200) {
                //修改数据,用mutation 里的数据修改
                context.commit('changeCount', { goodsId, goodsNum })

            }
            // 修改完数据之后再修改数据

            console.log(res)
        },
        // 删除购物车的商品
       async delSelect(context) {
            // 所有选中的数据
            const selCartList = context.getters.selCartList
            //  获取所有的id
            const cartIds = selCartList.map(item => item.id)
            // console.log(cartIds)
            // 删除
           await delSelect(cartIds)
           // 重新拉数据
           context.dispatch('getCartAction')
        }


    },
    getters: {
        // 商品总数总数
        cartTotal(state) {
            return state.cartList.reduce((sum, item) => sum + item.goods_num, 0)
        },
        // 选中
        selCartList(state) {
            return state.cartList.filter((item) => item.isChecked)
        },
        // 选中的总数
        selCount(state, getters) {
            return getters.selCartList.reduce((sum, item, index) => sum + item.goods_num, 0)
        },
        // 选中的总价
        selPrice(state, getters) {
            return getters.selCartList.reduce((sum, item, index) => {
                return sum + item.goods_num * item.goods.goods_price_min
            }, 0).toFixed(2)
        },
        //  是否全选中
        isAllChecked(state) {
            return state.cartList.every(item => item.isChecked)
        }

    }
}