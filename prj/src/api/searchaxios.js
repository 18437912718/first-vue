import axios from './common'

export function getjiu(con){
    return axios.get('search/jiu?id='+con)
}
export function getdatas(con){
    return axios.get('search/datas?id='+con)
}

