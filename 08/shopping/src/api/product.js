import request from '@/utils/request'


// 获取商品列表
export const getProList=(obj)=>{
    const { categoryId,goodsName,page}=obj
    console.log(obj)
    return request.get('/goods/list',{
        params:{
            categoryId,
            goodsName,
            page
        }

    }
      
    )
}

// 获取商品样品
export const getProDetail=(goodsId)=>{
    return request.get('/goods/detail',{
        params:{
            goodsId
        }

    }
      
    )
}

// 获取商品评价
export const getProComments=(goodsId,limit)=>{
    return request.get('/comment/listRows',{
        params:{
            goodsId,
            limit
        }

    }
      
    )
}