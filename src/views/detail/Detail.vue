<template>
    <!-- 商品详情页 -->
    <div path="/Detail">
       <detail-nav-bar/><!--顶部导航-->
       <detail-swiper/>
    </div>
</template>

<script>
    import DetailNavBar from './childComps/DetailNavBar'
    import DetailSwiper from './childComps/DetailSwiper'
    export default {
        name:'',
        components:{
            DetailNavBar,
            DetailSwiper
        }
    }
</script>