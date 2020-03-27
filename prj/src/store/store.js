import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
var store=new Vuex.Store({
    //1.state 数据模型
    state:{
        count:[],
        cone:'',
        data:null,
        sortdata:null
    },
       //mutations的函数不能加异步代码，函数
    mutations:{
        add:(state,n)=>{
            state.cone=n;
            if(n!=''){   
                if(state.count.indexOf(n)==-1){
                    state.count.push(n)
                }
            } 
        },
        sub:(state,n)=>{
            state.data=n
        },
        clear:(state)=>{
            state.count=[]
        },
        sort:(state,n)=>{
            state.sortdata=n
           
        }
    },
    getters: {
        isShow(state) {
            if(!state.data) {
                return;
            }
            if (state.data.length > 0) {
                return false
            } else {
                return true;
            }
        }
    }
  
})
export default store;