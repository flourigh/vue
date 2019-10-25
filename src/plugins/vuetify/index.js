import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import '@/assets/stylus/index.styl'
import '@/assets/stylus/width.styl'

Vue.use(Vuetify)

export default new Vuetify({
  options: {
    customProperties: true
  },

  icons: {
    iconfont: 'mdi'
  },

  theme: {
    'accent': '#0d52bf'
  }
})
