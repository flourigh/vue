import Vue from 'vue'
import VueRouter from 'vue-router'

import {
  home,
  wildcard
} from '@/plugins/router/common'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(() => { window.location.assign(location) })
}

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    wildcard,
    home
  ]
})

export default router
