<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <tab-bar/>
  </div>
</template>

<script>
  import TabBar from 'components/common/tabbar/miantabbar.vue'
  
  export default {
    name: '',
    data() {
      return {}
    },
    components: {
      TabBar
    }
  }
</script>

<style scoped >
</style>

