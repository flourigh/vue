import Vue from 'vue'
import VueRouter from 'vue-router'

import Drawer from '@/components/drawer/Default'
import Toolbar from '@/components/toolbar/Default'
import Hero from '@/components/Hero'
import Footer from '@/components/footer/Default'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '*',
      name: 'index',
      components: {
        drawer: Drawer,
        toolbar: Toolbar,
        default: Hero,
        footer: Footer
      }
    }
  ]
})

export default router
