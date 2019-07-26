<template>
    <div class="goodsinfo_container">
        <!-- 小球动画 -->
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        <!-- 轮播图区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotuList="lunbolist"></swiper>
                </div>
            </div>
        </div>
        <!-- 商品购买 -->
        <div class="mui-card">
            <div class="mui-card-header">{{ goodsInfo.title }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价格 : <del>￥{{ goodsInfo.market_price }}</del>&nbsp;&nbsp;销售价 : <span class="now_price">￥{{ goodsInfo.sell_price }}</span>
                    </p>
                    <p>购买数量: 
                        <numbox @getCount="getSelectCount" :max="goodsInfo.stock_quantity"></numbox>
                    </p>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                </div>
            </div>
        </div>
        <!-- 商品详情区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号 : {{ goodsInfo.goods_no }}</p>
                    <p>库存情况 : {{ goodsInfo.stock_quantity }}件</p>
                    <p>上架时间 : {{ goodsInfo.add_time | dataFormat }}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goodsDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goodsComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import swiper from '../news/subComponents/swiper.vue'
import numbox from '../news/subComponents/numbox.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,
            lunbolist: [],
            goodsInfo: {},
            ballFlag: false,
            selectCount: 1,
        }
    },
    created() {
        this.getlunbo(),
        this.getGoodsInfo()
    },
    methods: {
        getlunbo() {
            this.$http.get('api/getthumimages/' + this.id).then(res => {
                if(res.body.status === 0) {
                    res.body.message.forEach(item => {
                        item.img = item.src
                    })
                    this.lunbolist = res.body.message
                }
            })
        },
        getGoodsInfo() {
            this.$http.get('api/goods/getinfo/' + this.id).then(res => {
                if(res.body.status === 0) {
                    this.goodsInfo = res.body.message[0]
                }
            })
        },
        goodsDesc(id) {
            this.$router.push({ name: 'goodsDesc', params: { id }})
        },
        goodsComment(id) {
            this.$router.push({ name: 'goodsComment', params: { id }})
        },
        addToShopCar() {
            // 加入购物车
            this.ballFlag = !this.ballFlag
        },
        beforeEnter(el) {
            el.style.transform = 'translate(0, 0)'
        },
        enter(el, done) {
            el.offsetWidth
            // 不同分辨率下，小球的移动距离不同，动态坐标为：徽标的横纵坐标 - 小球的横纵坐标
            // 获取小球在页面中的坐标
            const ballPosition = this.$refs.ball.getBoundingClientRect()
            const badgePosition = document.querySelector('.mui-badge').getBoundingClientRect()
            const xDist = badgePosition.left - ballPosition.left
            const yDist = badgePosition.top - ballPosition.top

            el.style.transform = `translate(${xDist}px, ${yDist}px)`
            el.style.transition = 'all .5s cubic-bezier(.4,-0.3,1,.68)'
            done()
        },
        afterEnter(el) {
            this.ballFlag = !this.ballFlag
        },
        getSelectCount(count) {
            // 购物车数值变化
            this.selectCount = count
        }
    },
    components: {
        swiper,
        numbox
    }
}
</script>

<style lang="scss" scoped>
.goodsinfo_container {
    overflow: hidden;
}
.now_price {
    color: red;
    font-size: 16px; 
}
.mui-card-footer {
    display: block;
    padding: 20px;
    .mint-button--primary {
        margin-bottom: 20px;
    }
}
.ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 390px;
    left: 146px;
}
</style>
