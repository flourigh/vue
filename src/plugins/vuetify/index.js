import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import '@/assets/stylus/index.styl'
import '@/assets/stylus/cursor.styl'

import '@/assets/stylus/width.styl'
import '@/assets/stylus/height.styl'

import '@/assets/stylus/position.styl'
import '@/assets/stylus/top.styl'
import '@/assets/stylus/right.styl'
import '@/assets/stylus/bottom.styl'
import '@/assets/stylus/left.styl'

import '@/assets/stylus/filter.styl'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,

    options: {
      customProperties: true
    },

    themes: {
      dark: {
        accent: colors.purple
      }
    }
  },

  icons: {
    iconfont: 'mdi'
  }
})
