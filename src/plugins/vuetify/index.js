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
import '@/assets/stylus/border.styl'

import '@/assets/stylus/animations/loading/kjbrum.styl'
import '@/assets/stylus/animations/loading/janrubio.styl'

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
        primary: colors.deepPurple.base,
        secondary: colors.indigo.base,
        accent: colors.pink.base,
        error: colors.red.base,
        warning: colors.deepOrange.base,
        info: colors.amber.base,
        success: colors.lightGreen.base,
        background: '#000000'
      }
    }
  },

  icons: {
    iconfont: 'mdi'
  }
})
