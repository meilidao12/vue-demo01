<template>
  <div id="FirstPage">
      <div>
        <router-link :to="{name:'home'}">首页</router-link>
        <router-link :to="{name:'news'}">新闻页</router-link>
      </div>
      <hr>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
 components:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>

</style>
