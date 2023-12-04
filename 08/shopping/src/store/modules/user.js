import { getInfo ,setInfo} from '@/utils/storage'
export default{
    namespaced:true,
    state(){
        return{
            // 这里给userInfo 一个默认值
            userInfo:getInfo()
            // userInfo: {
            //     token: '',
            //     userId: ''
            //   },
        }
    },
    mutations:{
        //第一个参数就是state，第二个是形参
        setUserInfo(state,obj){
            state.userInfo=obj
            setInfo(obj)
        }

    },
    actions:{},
    getters:{},
}