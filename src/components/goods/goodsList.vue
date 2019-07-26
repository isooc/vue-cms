<template>
    <div class="goods-list">
        <!-- 使用编程式导航 router.push -->
        <div class="goods-item" v-for="item in goodList" :key="item.id" @click="detail(item.id)">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_price }}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore" v-if="flag">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pageSize: 1,
            goodList: [],
            flag: true
        }
    },
    created() {
        this.getGoodsList()
    },
    methods: {
        getGoodsList() {
            this.$http.get('api/getgoods?pageindex=' + this.pageSize).then(res => {
                if(res.body.status === 0) {
                    this.goodList = this.goodList.concat(res.body.message)
                }
                if(res.body.message.length < 10) {
                    this.flag = false
                }
            })
        },
        getMore() {
            this.pageSize++
            this.getGoodsList()
        },
        detail(id) {
            this.$router.push({ name: 'goodsInfo', params: { id }})
        }
    }
}
</script>

<style lang="scss" scoped>
    .goods-list {
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;
        background-color: #fff;
        .goods-item {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            box-shadow: 0 0 6px #999;
            min-height: 293px;
            width: 49%;
            border: 1px solid #ccc;
            margin: 4px 0;
            padding: 2px;
            img {
                width: 100%;
                vertical-align: middle;
            }
            .title {
                font-size: 14px;
            }

            .info {
                background-color: #eee;
                p {
                    margin: 0;
                    padding: 5px;
                }
                .price {
                    .now {
                        color: red;
                        font-size: 16px;
                    }
                    .old {
                        font-size: 12px;
                        text-decoration: line-through;
                        margin-left: 10px;
                    }
                }
                .sell {
                    display: flex;
                    justify-content: space-between;
                    font-size: 13px;
                }
            }
        }
    }
</style>
