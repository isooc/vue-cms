<template>
    <div>
        <cmtbox :id="$route.params.id"></cmtbox>
    </div>
</template>

<script>
import cmtbox from '../news/subComponents/comment.vue'
export default {
    components: {
        cmtbox
    }
}
</script>

<style lang="scss" scoped>

</style>
