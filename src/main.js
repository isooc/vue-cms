import Vue from 'vue'

import app from './App.vue'

// 路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 过滤器--时间
import moment from 'moment'
Vue.filter('dataFormat', function (dataStr, pattern='YYYY-MM-DD HH:mm:ss') {
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
    router
})
