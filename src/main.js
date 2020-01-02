import Vue from 'vue'
import App from '@/App'

import router from '@/plugins/router'
import store from '@/plugins/vuex'
import vuetify from '@/plugins/vuetify'

import '@/registerServiceWorker'

import * as firebase from 'firebase/app'
import 'firebase/auth'
import firebaseConfig from '@/.firebase.js'

firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false

Vue.prototype.$firebase = firebase

new Vue({
  store,
  vuetify,
  router: router(),
  render: h => h(App)
}).$mount('#app')
