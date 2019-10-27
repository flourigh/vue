import Vue from 'vue'
import Vuex from 'vuex'

import Document from '@/plugins/vuex/document'
import Search from '@/plugins/vuex/search'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    Document,
    Search
  }
})
