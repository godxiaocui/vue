const INFO_KEY = 'hm_shopping_info'

// 获取个人信息
export const getInfo = () => {
    const res = localStorage.getItem(INFO_KEY)
    return res ? Json.parse(res) : {
        token: '',
        userId: ''
    }

}

// 设置个人信息
export const setInfo = (obj) => {
    localStorage.setItem(INFO_KEY,JSON.stringify(obj))
}

// 移除个人信息
export const removeInfo = () => {
    localStorage.removeItem(INFO_KEY)
}