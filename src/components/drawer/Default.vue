<template>
  <v-navigation-drawer
    v-model="drawer"
    temporary
    app
  >
    <v-list
      dense
    >
      <v-list-item>
        <v-list-item-content>
          {{ title }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState('Document', [ 'title', 'toggle' ]),

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
      ...mapActions('Document', [ 'actionToggle' ])
    }
  }
</script>
