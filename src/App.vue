<template>
    <div class="app-container">
        <!-- 这是header组件区域 -->
        <mt-header fixed title="黑马程序员 · Vue项目"></mt-header>
        <!-- 这是中间的router-view区域 -->
		<transition mode="out-in">
			<router-view></router-view>
		</transition>
        <!-- 这是底部TabBar区域 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item123" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item123" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item123" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item123" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
	.mint-header {
		z-index: 99;
	}
	
    .app-container {
        padding-top: 40px;
		padding-bottom: 50px;
        overflow-x: hidden;
    }

	.v-enter {
		opacity: 0;
		transform: translateX(100%);
	}

	.v-leavt-to {
		opacity: 0;
		transform: translateX(-100%);
		// position: absolute;
	}

	.v-enter-active,
	.v-leave-active {
		transition: all .5s ease;
	}

	* {
		touch-action: pan-y;
	}

	// 改变类名，避免跟滑动条类名冲突的问题
	.mui-bar-tab .mui-tab-item123.mui-active {
		color: #007aff;
	}
	.mui-bar-tab .mui-tab-item123 {
		display: table-cell;
		overflow: hidden;
		width: 1%;
		height: 50px;
		text-align: center;
		vertical-align: middle;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #929292;
	}
	.mui-bar-tab .mui-tab-item123 .mui-icon {
		top: 3px;
		width: 24px;
		height: 24px;
		padding-top: 0;
		padding-bottom: 0;
	}
	.mui-bar-tab .mui-tab-item123 .mui-icon~.mui-tab-label {
		font-size: 11px;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
