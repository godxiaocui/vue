import request from '@/utils/request'

// mode ；两种模式一种需要传obj，一种不需要传obj
export const checkOrder = (mode, obj) => {
  return request.post('/checkout/order', {
 
      mode,
      delivery: 0,
      couponId: 0,
      isUsePoints: 0,
      ...obj // 传递过来的参数对象动态展开
    
  })
}

// 提交订单
export const submitOrder = (mode, params) => {
  return request.post('/checkout/submit', {
    mode,
    delivery: 10, // 物流方式  配送方式 (10快递配送 20门店自提)
    couponId: 0, // 优惠券 id
    payType: 10, // 余额支付
    isUsePoints: 0, // 是否使用积分
    ...params
  })
}

// 订单列表
export const getMyOrderList = (dataType, page) => {
  return request.get('/order/list', {
    params: {
      dataType,
      page
    }
  })
}