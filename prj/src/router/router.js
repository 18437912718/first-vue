import Vue from 'vue'
import VueRouter from "vue-router"
import home from '../components/home/home.vue'
import sort from '../components/sort/sort.vue'
import my from '../components/my/my.vue'
import car from '../components/car/car.vue'
import search from '../components/search/search.vue'
import jiu from '../components/search/sear/jiu.vue'

import result from '../components/search/sear/result.vue'
import log from '../components/my/mytaoku/log.vue'
import sign from '../components/my/mytaoku/sign.vue'
import froms from '../components/my/mytaoku/froms.vue'
import data from '../components/home/components/data.vue'
import sbgg from '../components/car/compnents/sbgg'
import listone from '../components/sort/comment/listone.vue'
import fuwu from '../components/my/mytaoku/fuwu.vue'
import help from '../components/my/mytaoku/help.vue'
import tonzhi from '../components/my/mytaoku/tonzhi.vue'
Vue.use(VueRouter)
let routes = [{
        path: '/',
        redirect: "/home"
    },
    {
        path: '/home',
        component: home,
        meta: {
            title: '首页'
        },
        children: [{
            path: 'data',
            component: data,

        }]
    },
    {
        path: '/sort',
        component: sort,
        meta: {
            title: '分类'
        },

    },
    {
        path: '/listone',
        component: listone,
    },

    {
        path: '/my',
        component: my,
        meta: {
            title: '我的'
        },
    },
    {
        path: '/fuwu',
        component: fuwu,

    },
    {
        path: '/help',
        component: help,

    },
    {
        path: '/tonzhi',
        component: tonzhi,

    },
    {
        path: '/log',
        component: log,
        children: [{
            path: 'sign',
            component: sign,

        }]
    },
    {
        path: '/froms',
        component: froms,
    },
    {
        path: '/search',
        component: search,
        meta: {
            title: '搜索'
        },
        children: [{
            path: 'jiu',
            component: jiu,
            children: [{
                path: 'result',
                component: result,
                },
               
        ]
        }]
    },
    {
        path: '/car',
        component: car,
        meta: {
            title: '购物车'
        },
        children: [{
            path: 'sbgg',
            component: sbgg,

        }]
    },


]

let router = new VueRouter({
    routes,
    //  mode:'history'
})
export default router;