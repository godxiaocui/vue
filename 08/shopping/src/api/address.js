import request from '@/utils/request'

// 获取地址列表
export const getAddressList = () => {
  return request.get('/address/list')
}

// 添加收获地址
export const setAddress = (name,phone,region) => {
    return request.post('//address/add',{
        name,
        phone,
        region

    })
  }