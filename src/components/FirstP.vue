<template>
    <div>
        <h2>我是头部组件---{{title}}---{{homemsg}}</h2>
        <button @click="run1()">执行父组件的方法</button>
        <br/>
        <br/>
        <button @click="getParent()">获取父组件的数据和方法</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg: '子组件的message'
        }
    },
    methods:{
        getParent(){
            alert(this.$parent.msg); 
            this.$parent.run('ggg');
        },
        run1(){
            alert('子组件的方法');
        }
    },
    props:['title','homemsg','run','home']
}
</script>


