import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import '@/assets/stylus/index.styl'
import '@/assets/stylus/width.styl'

import '@/assets/stylus/position.styl'

import '@/assets/stylus/top.styl'
import '@/assets/stylus/right.styl'
import '@/assets/stylus/bottom.styl'
import '@/assets/stylus/left.styl'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },

    themes: {
      light: {
        accent: '#1D4EF9'
      }
    }
  },

  icons: {
    iconfont: 'mdi'
  }
})
