import Vue from 'vue'
import VueRouter from 'vue-router'

import Drawer from '@/components/drawer/Default'
import Toolbar from '@/components/toolbar/Default'
import Footer from '@/components/footer/Default'

import Category from '@/views/categoria/Index'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/categoria/:tipo/:nome',
      name: 'baixofender',
      components: {
        drawer: Drawer,
        toolbar: Toolbar,
        default: Category,
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
