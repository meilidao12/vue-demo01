import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '@/components/FirstPage'
import Home from '@/components/Home'
import News from '@/components/News'
import SideMenu from '@/components/SideMenu'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'helloworld',
      component: HelloWorld,
    }
  ]
})
