<template>
    <div class="goodsDesc-container">
        <h3>{{ info.title }}</h3>

        <hr>

        <div class="content" v-html="info.content"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            info: {}
        }
    },
    created() {
        this.getGoodsDesc()
    },
    methods: {
        getGoodsDesc() {
            this.$http.get('api/goods/getdesc/' + this.$route.params.id).then(res => {
                if(res.body.status === 0) {
                    this.info = res.body.message[0]
                }
            })
        }
    }
}
</script>

<style lang="scss">
.goodsDesc-container {
    padding: 4px;
    h3 {
        font-size: 16px;
        color: #224aff;
        margin: 15px 0;
        text-align: center;
    }
    img {
        width: 100%;
    }
}
</style>
