import Vue from 'vue'
import App from '@/App.vue'

import router from '@/plugins/router'
import store from '@/plugins/vuex'
import vuetify from '@/plugins/vuetify'

import '@/registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router: router(),
  render: h => h(App)
}).$mount('#app')
