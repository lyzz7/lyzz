<template>
    <!-- 首页，头部导航 -->
    <div class="nav-bar">
        <div class="left">
            <slot name="left"><b></b></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {}
        },
        components: {}
    }
</script>

<style scoped >
.nav-bar{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    height:44px;
    line-height:44px;
    text-align: center;
    /* border-bottom:1px solid white; */
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
    background:rgb(255, 245, 108);
}
.left,.right{
    width: 60px;
}
.center{
    flex-grow: 1;
}
</style>
