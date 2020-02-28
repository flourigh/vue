import Vue from 'vue'
import App from '@/App'

import router from '@/plugins/router'
import store from '@/plugins/vuex'
import vuetify from '@/plugins/vuetify'

import '@/registerServiceWorker'

Vue.prototype.$env = (env) => process.env.VUE_APP_NODE_ENV === env
Vue.prototype.$empty = (obj) => Object.entries(obj).length === 0 && obj.constructor === Object

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router: router(),
  render: h => h(App)
}).$mount('#app')
