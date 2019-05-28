import Vue from 'vue'
import Router from 'vue-router'
import FirstPage from '@/components/FirstPage'
import Home from '@/components/Home'
import News from '@/components/News'
import SideMenu from '@/components/SideMenu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FirstPage',
      component: FirstPage,
      children:[
        {
          path:'home',
          name:'home',
          component:Home
        },
        {
          path:'news',
          name:'news',
          component:News
        }
      ]
    }
  ]
})
