<template>
<div>
    <v-firstp :title="title" :homemsg="msg" :run="run" :home="this"></v-firstp>
    <br>
    <hr>
    <ul>
        <li><a href="#">第一页</a></li>
        <li><a href="#">第二页</a></li>
        <li><a href="#">第三页</a></li>
    </ul>
    <button v-on:click="run">点击触发</button>
    <router-view></router-view>
</div>
</template>


<script>
import FirstP from './FirstP';
export default {
    data(){
        return{
            msg:'我是一个home组件',
            title:'首页111'
        }
    },
    methods:{
        run:function(data){
            alert('我是home组件的run方法' + data);
        }
    },
    components:{
        'v-firstp':FirstP
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

