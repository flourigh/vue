<template>
  <v-navigation-drawer
    v-model="drawer"
    temporary
    app
  >
    <v-expansion-panels
      multiple
      accordion
    >
      <v-btn
        text
        large
        class="mb-5"
        @click="openLink('/')"
      >
        {{ page.title }}
      </v-btn>
    </v-expansion-panels>
  </v-navigation-drawer>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState('Document', [ 'page', 'toggle' ]),

      drawer: {
        get () {
          return this.toggle.drawer
        },
        set (value) {
          this.actionToggle({ key: 'drawer', value: value })
        }
      }
    },

    methods: {
      ...mapActions('Document', [ 'actionToggle' ]),

      openLink (param, item) {
        if (param === '/') {
          this.$router.push('/')
          return
        }

        if (item) {
          this.$router.push(`/item/${param}/${item.replace(/ /g, '').toLowerCase()}`)
        } else {
          this.$router.push(`/categoria/${param}`)
        }
      }
    }
  }
</script>
