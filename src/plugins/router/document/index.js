import Vue from 'vue'
import VueRouter from 'vue-router'

import {
  home,
  wildcard,
  uri
} from '@/plugins/router/common'

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
    uri
  ]
})

export default router
