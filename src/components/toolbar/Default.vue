<template>
  <v-card
    width="412"
    height="64"
    class="mx-auto"
    flat
    tile
  >
    <v-toolbar
      color="transparent"
      flat
      dark
    >
      <v-toolbar-title
        class="cursor-pointer"
        @click="getHome()"
      >
        {{ page.title }}
      </v-toolbar-title>

      <v-spacer />

      <v-btn
        v-if="getShare()"
        property="sameAs"
        class="mx-0"
        target="blank"
        icon

        @click="cta('share')"
      >
        <v-icon>
          share
        </v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
  import { mapState } from 'vuex'

  import share from '@/plugins/mixins/share'
  import keyfind from '@/plugins/mixins/keyfind'

  export default {
    mixins: [
      share,
      keyfind
    ],

    computed: {
      ...mapState('Document', ['page'])
    },

    methods: {
      cta (param) {
        if (param === 'share') this.socialShare(this.page.title, this.$route.params.uri, location.href)
      },

      getShare () {
        if (this.keyFind(this.$route.meta, 'function')) return this.keyFind(this.$route.meta.function, 'share')
      },

      getHome () {
        if (this.$route.name !== 'home') this.$router.push('/')
      }
    }
  }
</script>
