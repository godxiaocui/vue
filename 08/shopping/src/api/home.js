// 这里配置了home所用对的请求的方法
import request from '@/utils/request'

//获取首页字段
export const getHomeData=()=>{
        return request.get('/page/detail',{
            params:{
                pageId:0
            }
        })
}