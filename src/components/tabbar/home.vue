<template>
    <div>
        <!-- 轮播图 -->
        <swiper :lunbotuList="lunbotuList"></swiper>

        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
                <img src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoList">
                <img src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodsList">
                <img src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
                <img src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
                <img src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
                <img src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></router-link></li>
        </ul> 
    </div>
</template>

<script>
    import { Toast } from 'mint-ui'
    import swiper from '../news/subComponents/swiper.vue'
export default {
    data() {
        return {
            lunbotuList: [],
        }
    },
    created() {
        this.getlunbotu()
        
    },
    methods: {
        getlunbotu() {
            this.$http.get('api/getlunbo')
            .then( res => {
                if(res.body.status === 0) {
                    this.lunbotuList = res.body.message
                } else {
                    Toast('轮播图加载失败...')
                }
            })
        }
    },
    components: {
        swiper,
    }
}
</script>

<style lang="scss" scope>

.mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
    img {
        width: 60px;
        height: 60px;
    }

    .mui-table-view-cell .mui-media-body {
        font-size: 13px;
    }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0;
}

</style>
