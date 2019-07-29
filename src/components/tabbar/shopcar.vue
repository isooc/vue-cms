<template>
    <div class="shopcar_container">
        <div class="mui-card" v-for="(item, i) in carList" :key="item.id">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch v-model="$store.getters.getGoodsSelected[item.id]" 
                    @change="selectedChange(item.id, $store.getters.getGoodsSelected[item.id])"></mt-switch>
                    <img :src="item.thumb_path" alt="">
                    <div class="info">
                        <h1 class="title">{{ item.title }}</h1>
                        <p>
                            <span class="price">￥{{ item.sell_price }}</span>
                            <numbox :initCount="$store.getters.getGoodsCount[item.id]" :goodsId="item.id"></numbox>
                            <a href="#" @click="remove(item.id, i)">删除</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总计（不含运费）</p>
                        <p>已勾选商品 <span class="red">{{ $store.getters.getGoodsCountAndAmount.count }}</span> 件，总价 <span class="red">￥{{ $store.getters.getGoodsCountAndAmount.amount }}</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import numbox from '../news/subComponents/shopcar_numbox.vue'
export default {
    components: {
        numbox
    },
    data() {
        return {
            carList: []
        }
    },
    created() {
        this.getShopCarInfo()
    },
    methods: {
        getShopCarInfo() {
            var idsArr = []
            this.$store.state.car.forEach(item => idsArr.push(item.id))
            if(idsArr.length <= 0) {
                return;
            }
            this.$http.get('api/goods/getshopcarlist/' + idsArr.join(',')).then(res => {
                if(res.body.status === 0) {
                    this.carList = res.body.message
                }
            })
        },
        remove(id, i) {
            this.carList.splice(i, 1)
            this.$store.commit('removeGoods', id)
        },
        selectedChange(id, val) {
            // console.log(id + '------' + val);
           this.$store.commit('updateSelectedChange', {id, selected: val})
        }
    }
}
</script>

<style lang="scss" scoped>
.shopcar_container {
    overflow: hidden;
}
.mui-card-content-inner {
    display: flex;
    align-items: center;
    img {
        width: 60px;
    }
    .info {
        .title {
            font-size: 13px;
        }
        .price {
            color: red;
        }
    }
}
.jiesuan {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .red {
            color: red;
            font-weight: bold;
        }
    }
</style>
