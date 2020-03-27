import axios from './common'

export function getBanner(){
    return axios.get('dang/banner')
}
export function getCateList(){
    return axios.get('dang/cateList')
}
export function getSelect(){
    return axios.get('/dang/select')
}
export function getSeackill(){
    return axios.get('/dang/select')
}
export function getBrand(){
    return axios.get('/dang/brand')
}
export function getShopper(){
    return axios.get('/dang/shopper')
}
export function getDataBanner(){
    return axios.get('/dang/data-banner')
}