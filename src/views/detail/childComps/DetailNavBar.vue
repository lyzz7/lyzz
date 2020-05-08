<template>
    <!-- 商品详情页，顶部导航 -->
    <div>
        <nav-bar><div slot="left" @click="backClick">《</div></nav-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
    components:{
        NavBar
    },
    methods:{
        backClick(){
            this.$router.back()
        }
    }
}
</script>