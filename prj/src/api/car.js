import axios from './common'

export function getSbg(){
    return axios.get('/cart/sbg')
}
