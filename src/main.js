import Vue from 'vue'

import app from './App.vue'

// 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)
var car = JSON.parse(localStorage.getItem('car') || '[]')
const store = new Vuex.Store({
    state: {
        car: car
    },
    mutations: {
        addCarCount(state, goodsInfo) {
            let flag = true
            state.car.some(item => {
                if (item.id == goodsInfo.id) {
                    item.count += parseInt(goodsInfo.count)
                    flag = false
                    return true
                }
            })

            if (flag) state.car.push(goodsInfo)

            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateCount(state, obj) {
            state.car.some(item => {
                if (item.id == obj.id) {
                    item.count = parseInt(obj.count)
                    return true
                }
            })
        },
        removeGoods(state, id) {
            state.car.some((item, i) => {
                if (item.id == id) {
                    state.car.splice(i, 1)
                    return true
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        updateSelectedChange(state, info) {
            state.car.some(item => {
                if (item.id == info.id) {
                    item.selected = info.selected
                    return true
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car))
        }
    },
    getters: {
        getAllCount(state) {
            let c = 0
            state.car.forEach(item => {
                c += item.count
            })
            return c
        },
        getGoodsCount(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.count
            })
            return o
        },
        getGoodsSelected(state) {
            var o = {}
            state.car.forEach(item => {
                o[item.id] = item.selected
            })
            return o
        },
        getGoodsCountAndAmount(state) {
            var o = {
                count: 0,
                amount: 0
            }
            state.car.forEach(item => {
                if (item.selected) {
                    o.count += item.count
                    o.amount += item.price * item.count
                }
            })
            return o
        }
    }
})

// 过滤器--时间
import moment from 'moment'
Vue.filter('dataFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
})

import router from './router.js'

// 请求
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 全局配置根域名
Vue.http.options.root = 'http://www.liulongbin.top:3005/'
Vue.http.options.emulateJSON = true

// 按需导入mint-ui组件
// import { Header, Swipe, SwipeItem, button, Lazyload  } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(button.name, button);
// Vue.use(Lazyload)

import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
Vue.use(MintUI)

import './lib/mui/css/mui.min.css'

import './lib/mui/css/icons-extra.css'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store
})
