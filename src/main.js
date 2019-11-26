import Vue from 'vue'
import App from '@/App'

import router from '@/plugins/router'
import store from '@/plugins/vuex'
import vuetify from '@/plugins/vuetify'

/** @Externals */
import VueDisqus from 'vue-disqus'
import uuid from 'uuid/v4'
import './registerServiceWorker'
/** @Externals */

/** @Prototypes */
Vue.prototype.$uuid = uuid
/** @Prototypes */

/** @VueUses */
Vue.use(VueDisqus)
/** @VueUses */

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router: router(),
  render: h => h(App)
}).$mount('#app')
