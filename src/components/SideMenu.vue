<template>
<div>
    <ul>
        <li><a href="#">第一页</a></li>
        <li><a href="#">第二页</a></li>
        <li><a href="#">第三页</a></li>
    </ul>
    <router-view></router-view>
</div>
</template>


<script>


export default {

}
</script>

<style scoped>
li{
    list-style-type: none;
    text-align: left;
    border: 1px;
}
</style>

