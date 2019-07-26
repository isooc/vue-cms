<template>
    <!-- 异步任务，不知道什么时候能拿到max值 -->
    <!-- 使用watch监听父组件传过来的max值 -->
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChange" ref="numbox" />
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from '../../../lib/mui/js/mui.min.js'
export default {
    mounted() {
        mui('.mui-numbox').numbox()
    },
    methods: {
        countChange() {
            this.$emit('getCount', parseInt(this.$refs.numbox.value))
        }
    },
    props: ['max'],
    watch: {
        max: function(newVal, oldVal) {
            mui('.mui-numbox').numbox().setOption('max',newVal)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
