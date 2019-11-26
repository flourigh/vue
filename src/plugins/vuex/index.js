import Vue from 'vue'
import Vuex from 'vuex'

import Document from '@/plugins/vuex/document'

import Toggle from '@/plugins/vuex/toggle'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    Document,
    Toggle
  }
})
