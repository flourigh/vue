import Vue from 'vue'
import VueRouter from 'vue-router'

import {
  home,
  wildcard
} from '@/plugins/router/common'

import {
  categoria
} from '@/plugins/router/categoria'

import {
  item
} from '@/plugins/router/item'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(() => { window.location.assign(location) })
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',

  routes: [
    wildcard,
    home,
    categoria,
    item
  ]
})

export default router
