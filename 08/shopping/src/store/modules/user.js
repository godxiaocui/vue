import { getInfo,setInfo} from '@/utils/storage'
export default{
    namespaced:true,
    stated(){
        return{
            // 这里给userInfo 一个默认值
            userInfo:getInfo()
        }
    },
    mutations:{
        //第一个参数就是state，第二个是形参
        setUserInfo(state,obj){
            state.userInfo=obj
            setInfo(obj)
        }

    },
    actions:{    },
    getters:{},
}