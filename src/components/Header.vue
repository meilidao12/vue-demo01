<template>
    <div>
        <ul class="topmenu">
            <li><a href="#">首页</a></li>
            <li><a href="#">联系我们</a></li>
            <li><a href="#">关于我们</a></li>
        </ul>
    </div>
</template>

<script>
import Link from './Link'
export default {
    components:{
        'v-link' : Link
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}
.topmenu{
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #165;
}

.topmenu li {
    float: left;
}

.topmenu li a{
    display: inline-block;
    text-align: center;
    color: white;
    padding: 20px; 
    text-decoration: none;
    margin: 0;
}

.topmenu li a:hover {
    background-color: #222;
}
</style>
