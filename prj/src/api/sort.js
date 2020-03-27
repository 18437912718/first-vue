import axios from './common'


// 获取左侧列表
export function getsort(){
    return axios.get('sortlist/sort')
}
// 获取品牌
export function getbrand(id){
    return axios.get('sortlist/brand?id='+id)
}
export function getlistone(con){
    return axios.get('sortlist/listone?id='+con)
}

