<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="https://img14.360buyimg.com/n7/jfs/t1/41069/14/5268/224755/5ceb4b2dE509aca2c/c57bbc4a52f3f8ee.jpg" alt="">
            <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥999</span>
                    <span class="old">￥1200</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://img14.360buyimg.com/n7/jfs/t1/41069/14/5268/224755/5ceb4b2dE509aca2c/c57bbc4a52f3f8ee.jpg" alt="">
            <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥999</span>
                    <span class="old">￥1200</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="https://img14.360buyimg.com/n7/jfs/t1/41069/14/5268/224755/5ceb4b2dE509aca2c/c57bbc4a52f3f8ee.jpg" alt="">
            <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥999</span>
                    <span class="old">￥1200</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
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
