<template>
     <div class="tab-bar-item" @click="itemClick">
       <div v-if="!isActive">
         <slot name="item-icon"></slot>
       </div>
       <div v-else>
         <slot name="item-icon-active"></slot>
       </div>
       <div :style="activeStyle">
         <slot name="item-text"></slot>
       </div>
         
     </div>
</template>

<script>
export default {
 name: '',
//  props: {//定义多个用这种方式，后面要给属性的类型
//   title: String,
//   likes: Number,
//   isPublished: Boolean,
//   commentIds: Array,
//   author: Object,
//   callback: Function,
//   contactsPromise: Promise // or any other constructor
// }
 props:{
   path:String,
   activeColor:{
     type:String,
     default:"#1296db"
   },
 },
 data(){
   return{
   }
 },
 methods: {
   itemClick(){
    //  console.log(this.path);
     this.$router.replace(this.path).catch(err=>err)
   }
 },
 computed: {
   isActive(){
    //  console.log(this.$route);
     return this.$route.path.indexOf(this.path)!==-1
   },
   activeStyle(){
     return this.isActive?{color:this.activeColor}:{}
   }
 },
 }
</script>

<style scoped >
 #tab-bar .tab-bar-item{
   /* border:1px solid red; */
   flex:1;
   text-align: center;
   height:49px;
 }
 #tab-bar .tab-bar-item img{
   margin-top:5px;
   width: 1.3rem;
   height: 1.3rem;
   vertical-align: middle;/* 把此元素放置在父元素的中部。 */
   margin-bottom:1px;

 }
 #tab-bar .tab-bar-item div{
   font-size: 14px;
 }
</style>
