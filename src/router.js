import VueRouter from 'vue-router'

import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import shopcar from './components/tabbar/shopcar.vue'
import search from './components/tabbar/search.vue'
import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
import photoList from './components/photos/photoList.vue'
import photoInfo from './components/photos/photoInfo.vue'
import goodsList from './components/goods/goodsList.vue'
import goodsInfo from './components/goods/goodsInfo.vue'
import goodsDesc from './components/goods/goodsDesc.vue'
import goodsComment from './components/goods/goodsComment.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: home},
        { path: '/member', component: member},
        { path: '/shopcar', component: shopcar},
        { path: '/search', component: search},
        { path: '/home/newsList', component: newsList},
        { path: '/home/newsInfo/:id', component: newsInfo},
        { path: '/home/photoList', component: photoList},
        { path: '/home/photoInfo/:id', component: photoInfo},
        { path: '/home/goodsList', component: goodsList},
        { path: '/home/goodsInfo/:id', component: goodsInfo, name: 'goodsInfo'},
        { path : '/home/goodsDesc/:id', component: goodsDesc, name: 'goodsDesc'},
        { path : '/home/goodsComment/:id', component: goodsComment, name: 'goodsComment'},
    ],
    linkActiveClass: 'mui-active'
})

export default router