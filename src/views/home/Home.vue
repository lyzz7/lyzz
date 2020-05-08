<template>
  <!-- 首页，中间 -->
  <div id="home"> 
    <nav-bar><!-- 首页顶部选项栏 -->
      <div slot="center">欢乐购</div>
    </nav-bar>
    <swipe/><!-- 图片轮播 -->
    <router-link to="/detail" tag='button'>aaaaaa</router-link>
    <br/><br/><br/><br/><br/><br/><br/><br/>
     <br/><br/><br/><br/><br/><br/><br/><br/>
     <br/><br/><br/><br/><br/><br/><br/><br/>
     <br/><br/><br/><br/><br/><br/><br/><br/>
     <br/><br/><br/><br/><br/><br/><br/><br/>
     <br/><br/><br/><br/><br/><br/><br/><br/>
     <br/><br/><br/><br/><br/><br/><br/><br/>
     <br/><br/><br/><br/><br/><br/><br/><br/>
     <br/><br/><br/><br/><br/><br/><br/><br/>
     <br/><br/><br/><br/><br/><br/><br/><br/>
     <br/><br/><br/><br/><br/><br/><br/><br/>
     <br/><br/><br/><br/><br/><br/><br/><br/>
     <br/><br/><br/><br/><br/><br/><br/><br/>
     <br/><br/><br/><br/><br/><br/><br/><br/>
  </div>
</template> 

<script>
  import NavBar from 'components/common/navbar/NavBar.vue'
  import Swipe from './childComps/Swipe.vue'

  export default {
    name: '',
    props:{
      path:String
    },
    methods: {
      
    },
    components:{
      NavBar,
      Swipe
    }
  }
</script>

<style scoped >
  #home{
    padding-top:50px;
    padding-bottom:50px;
    background-color: #f6f6f6;
  }
</style>
