<template>
    <div id="Profile"> 
        <nav-bar/>
        我的
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar.vue'

    export default {
        name: '',
        components:{
            NavBar
        }
    }
</script>

<style scoped >
    #Profile{
        padding-top:50px;
        padding-bottom:50px;
        background-color: #f6f6f6;
    }
</style>
