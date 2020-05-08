<template>
 <div> 
    <div id="tab-bar">
        <slot></slot>
    </div>
 </div>
</template>

<script>
export default {
 name: '',
 }
</script>

<style scoped >
 #tab-bar{
   display: flex;
   background:white;
   position: fixed;
   right: 0;
   left: 0;
   bottom:0;
   box-shadow:0px 1px 12px 0px rgb(182, 181, 181,.8);
 }
</style>
