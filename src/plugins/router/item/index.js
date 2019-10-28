import Vue from 'vue'
import VueRouter from 'vue-router'

import Drawer from '@/components/drawer/Default'
import Toolbar from '@/components/toolbar/Default'
import Footer from '@/components/footer/Default'

import Item from '@/views/item/Index'

Vue.use(VueRouter)

// /item/baixo/fender/originalamericanbass

const router = new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/item/:categoria/:marca/:nome',
      name: 'item',
      components: {
        drawer: Drawer,
        toolbar: Toolbar,
        default: Item,
        footer: Footer
      },
      meta: {
        toolbar: {
          logo: require('@/assets/img/categoria/logo-sommexe-categoria.png'),
          background: require('@/assets/img/categoria/pessoas-pulando-em-show-categoria.png')
        }
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.params.nome) location.assign('/')
  next()
})

export default router
