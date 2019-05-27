<template>
<div>
    <ul>
        <li><router-link to="demo1">第一页</router-link></li>
        <li><a href="#">第二页</a></li>
        <li><a href="#">第三页</a></li>
    </ul>
    <router-view></router-view>
</div>
</template>


<script>
import demo from './demo'

export default {
    components:{
        demo1:demo
    }
}
</script>

<style scoped>
li{
    list-style-type: none;
    text-align: left;
    border: 1px;
}
</style>

