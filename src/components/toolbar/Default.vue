<template>
  <v-app-bar
    color="transparent"
    hide-on-scroll
    flat
    app
  >
    <v-app-bar-nav-icon
      @click="drawer()"
    />

    <v-toolbar-title>
      {{ title }}
    </v-toolbar-title>

    <v-spacer />

    <v-btn icon>
      <v-icon>
        mdi-magnify
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState('Document', [ 'title', 'toggle' ])
    },

    methods: {
      ...mapActions('Document', [ 'actionToggle' ]),

      drawer () {
        this.actionToggle({ key: 'drawer', value: !this.toggle.drawer })
      }
    }
  }
</script>
