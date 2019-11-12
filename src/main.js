import Vue from 'vue'
import App from '@/App'

import router from '@/plugins/router'
import store from '@/plugins/vuex'
import vuetify from '@/plugins/vuetify'

/** @Prototypes */
import uuid from 'uuid/v4'
Vue.prototype.$uuid = uuid
/** @Prototypes */

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router: router(),
  render: h => h(App)
}).$mount('#app')
