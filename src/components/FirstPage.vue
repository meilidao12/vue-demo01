<template>
  <div id="FirstPage">
      <v-header></v-header>
      <div class="body">
        <div class="sidemenu"><v-sidemenu></v-sidemenu></div>
        <div class="content"><v-contentmenu></v-contentmenu></div>
      </div>
  </div>
</template>

<script>
import Header from './Header'
import SideMenu from './SideMenu'
import ContentMenu from './ContentMenu'
export default {
 components:{
    'v-header' : Header,
    'v-sidemenu' : SideMenu,
    'v-contentmenu' : ContentMenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body{
  margin: 20px 0px;
}
.sidemenu{
  float: left;
  width: 20%;
}
.content{
  float: left;
  width: 80%;
}

</style>
