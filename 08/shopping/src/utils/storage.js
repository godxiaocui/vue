const INFO_KEY = 'hm_shopping_info'
const HISTORY_KEY = 'hm_history_list'

// 获取个人信息
export const getInfo = () => {
    const res = localStorage.getItem(INFO_KEY)
    console.log(res)
    return res ? JSON.parse(res) : {
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

//设置我们的个人信息
export const setHistory =(arr)=>{
    localStorage.setItem(HISTORY_KEY,JSON.stringify(arr))
}


// 获取个人信息
export const getHistory= ()=>{
    return localStorage.getItem(HISTORY_KEY)? JSON.parse(localStorage.getItem(HISTORY_KEY)):[]

}