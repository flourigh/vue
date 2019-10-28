import Vue from 'vue'
import VueRouter from 'vue-router'

import Drawer from '@/components/drawer/Default'
import Toolbar from '@/components/toolbar/Default'
import Footer from '@/components/footer/Default'

import Catalog from '@/components/Catalog'

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
        default: Catalog,
        footer: Footer
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
