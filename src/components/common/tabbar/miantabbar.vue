<template>
  <!-- 首页，底部导航 -->
  <div id="mianTabBar"> 
      <tab-bar>
        <tab-bar-item path="/home" >
          <!-- 选项图标 -->
          <img slot="item-icon" src="~assets/img/tabbar/首页.svg">
          <!-- 点击的选项图标 -->
          <img slot="item-icon-active" src="~assets/img/tabbar/首页2.svg">
          <div slot="item-text" >首页</div>
        </tab-bar-item>
        <tab-bar-item path="/shop">
          <img slot="item-icon" src="~assets/img/tabbar/商店.svg">
          <img slot="item-icon-active" src="~assets/img/tabbar/商店2.svg">
          <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart">
          <img slot="item-icon" src="~assets/img/tabbar/购物车.svg">
          <img slot="item-icon-active" src="~assets/img/tabbar/购物车2.svg">
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile">
          <img slot="item-icon" src="~assets/img/tabbar/我的.svg">
          <img slot="item-icon-active" src="~assets/img/tabbar/我的2.svg">
          <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
 </div>
</template>

<script>
import TabBar from 'components/common/tabbar/tabbar.vue'
import TabBarItem from 'components/common/tabbar/tabbarItem.vue'
export default {
 name: '',
 components:{
    TabBar,
    TabBarItem
 }
 }
</script>

<style scoped >
#mianTabBar{
  background:rgb(101, 146, 55);
}
</style>
