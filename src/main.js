import Vue from 'vue'

import app from './App.vue'

// 路由
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import router from './router.js'

// 请求
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 按需导入mint-ui组件
import { Header, Swipe, SwipeItem } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import './lib/mui/css/mui.min.css'

import './lib/mui/css/icons-extra.css'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})
