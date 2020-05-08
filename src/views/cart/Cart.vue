<template>
    <div id="Cart"> 
        
        <nav-bar id="big">
            <div slot="left" class="g">共？件商品</div>
            <div slot="center"><b>购物车(?)</b></div>
            <div slot="right" class="gl"  @click="isHaha"><b>管理</b></div>
        </nav-bar>

        <div class="hah">
            <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit"  class="aniu" >
                <div style="width:100px;height:50px;background-color:brown" v-if="isShow">haha</div>
            </van-submit-bar>
        </div>
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar.vue'
    import Vue from 'vue';
    import { SubmitBar } from 'vant';

    Vue.use(SubmitBar);

    export default {
        name: '',
        data(){
            return{
                isShow:false
            }
        },
        components:{
            NavBar
        },
        methods:{
            onSubmit(){
                console.log("我是提交订单");
                
            },
            isHaha(){
                this.isShow=!this.isShow
            }
        }
    }
</script>

<style scoped >
@import '../../assets/css/CartCss.css'
</style>
