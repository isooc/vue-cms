<template>
    <div class="photoContainer">
        <h3 class="title">{{ photoInfo.title }}</h3>
        <div class="subtitle">
            <span>创建时间：{{ photoInfo.add_time | dataFormat }}</span>
            <span>点击：{{ photoInfo.click }}次</span>
        </div>

        <hr>

        <div class="detail">
            <!-- 缩略图 -->
            <div class="thum mui-clearfix">
                <vue-preview :slides="imgs"></vue-preview>
            </div>
            <div v-html="photoInfo.content"></div>
            <cmt :id="id"></cmt>
        </div>
    </div>
</template>

<script>
import comment from '../news/subComponents/comment.vue'
export default {
    data() {
        return {
            id: this.$route.params.id,
            photoInfo: {},
            imgs: []
        }
    },
    created() {
        this.getImgInfo()
        this.getThums()
    },
    methods: {
        getImgInfo() {
            this.$http.get('api/getimageInfo/' + this.id).then(res => {
                if(res.body.status === 0) {
                    this.photoInfo = res.body.message[0]
                }
            })
        },
        getThums() {
            this.$http.get('api/getthumimages/' + this.id).then(res => {
                if(res.body.status === 0) {
                    this.imgs = res.body.message
                    this.imgs.forEach(item => {
                        item.w = 600
                        item.h = 400
                        item.msrc = item.src
                    })
                }
            })
        }
    },
    components: {
        cmt: comment
    }
}
</script>

<style lang="scss">
.photoContainer {
    padding: 3px;
    .title {
        color: #26a2ff;
        font-size: 15px;
        margin: 15px 0;
        text-align: center;
    }
    .subtitle {
        font-size: 13px;
        color: #666;
        display: flex;
        justify-content: space-between;
    }
    .detail {
        font-size: 13px;
        line-height: 30px;
      
        .thum figure {
            float: left;
            width: 100px;
            margin: 0;
            margin-left: 10px;
        }
        .thum figure img {                
            width: 100%; 
            box-shadow: 0 0 8px #999;              
        }       
    }
  
}
</style>
