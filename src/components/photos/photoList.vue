<template>
    <div>
		<!-- 滚动条区域 -->
        <div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id" @tap="getImages(item.id)">
						{{ item.title }}
					</a>
				</div>
			</div>
		</div>

		<!-- 图片列表区域 -->
		<ul class="imgList">
			<router-link v-for="item in list" :key="item.id" :to="'/home/photoInfo/' + item.id" tag="li">
				<img v-lazy="item.img_url">
				<div class="info">
					<div class="info-title">{{ item.title }}</div>
					<div class="info-body">{{ item.zhaiyao }}</div>
				</div>
			</router-link>
		</ul>
    </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'

export default {
    data() {
		return {
			cates: [],
			list: []
		}
    },
    mounted() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
	},
	created() {
		this.getImgCategory();
		this.getImages(0)
	},
	methods: {
		getImgCategory() {
			this.$http.get('api/getimgcategory').then(res => {
				if(res.body.status === 0) {
					res.body.message.unshift({title:"全部", id:0})
					this.cates = res.body.message
				}
			})
		},
		getImages(cateId) {
			this.$http.get('api/getimages/' + cateId).then(res => {
				if(res.body.status === 0) {
					this.list = res.body.message
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
	* {
		touch-action: pan-y;
		// background-color: #fff;

		.imgList {
			list-style: none;
			margin: 0;
			padding: 10px;

			li {
				background-color: #ccc;
				position: relative;
				box-shadow: 0 0 9px #999;
				margin-bottom: 10px;
				// overflow: hidden;
				img {
					width: 100%;
				}

				.info {
					position: absolute;
					bottom: 0;
					color: #fff;
					background-color: rgba(0, 0, 0, .4);
					max-height: 84px;
					width: 100%;

					.info-title {
						font-size: 14px;
					}
					.info-body {
						font-size: 13px;
						overflow: hidden;
						text-overflow: hidden;
						white-space: nowrap;
					}
				}
			}
		}
		img[lazy=loading] {
			width: 40px;
			height: 300px;
			margin: auto;
		}
	}

	
</style>
