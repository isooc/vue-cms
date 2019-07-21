<template>
    <div class="newsInfoContent">
        <h3 class="title">{{ newsInfo.title }}</h3>
        <p class="subtitle">
            <span>创建时间：{{ newsInfo.add_time | dataFormat }}</span>
            <span>点击：{{ newsInfo.click }}次</span>
        </p>

        <hr>
        
        <div class="content" v-html="newsInfo.content"></div>

        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'

import comment from '../news/subComponents/comment.vue'

export default {
    data() {
        return {
            id: this.$route.params.id,
            newsInfo: {}
        }
    },
    created() {
        this.getNewsInfo()
    },
    methods: {
        getNewsInfo() {
            this.$http.get('api/getnew/' + this.id).then( res => {
                // console.log(this.id);                
                if(res.body.status === 0) {
                    this.newsInfo = res.body.message[0]
                } else {
                    Toast('获取新闻详情失败...')
                }
            })
        }
    },
    components: {
        'comment-box': comment
    }
}
</script>

<style lang="scss">
    .newsInfoContent {
        padding: 0 4px;
        .title {
            font-size: 16px;
            color: red;
            margin: 15px 0;
        }
        .subtitle {
            display: flex;
            justify-content: space-between;
            color: #226aff;
        }
        .content {
            img {
                width: 100%;
            }
        }
    }
</style>
