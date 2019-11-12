<template>
  <v-card
    width="412"
    class="mx-auto"
    flat
    tile
  >
    <v-toolbar
      :src="getBackground()"
      color="transparent"
      prominent
      extended
      flat
      dark
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
        />
      </template>

      <v-app-bar-nav-icon
        v-if="false"
        @click="drawer()"
      />

      <v-spacer />

      <v-btn
        v-if="false"
        icon
        @click="search()"
      >
        <v-icon>
          mdi-magnify
        </v-icon>
      </v-btn>

      <template
        v-slot:extension
      >
        <v-slide-y-transition>
          <v-form
            v-if="toggle.search"
            v-model="form.search"
            class="max-width-200 mx-auto pb-5 mb-3"
          >
            <v-text-field
              v-model="form.input.search"
              :rules="form.rules.search"
              placeholder="Buscar"
              rounded
              solo
              light
              dense
              autofocus
              append-icon=""
              color="accent"
              required
              hide-details
            />
          </v-form>
        </v-slide-y-transition>
      </template>
    </v-toolbar>
  </v-card>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  import keyFind from '@/plugins/mixins/keyfind'

  export default {
    mixins: [
      keyFind
    ],

    data: () => ({
      form: {
        search: false,

        input: {
          search: ''
        },

        rules: {
          search: [
            v => !!v || 'Escolha uma opção da lista'
          ]
        }
      }
    }),

    computed: {
      ...mapState('Document', [ 'toggle' ])
    },

    methods: {
      ...mapActions('Document', [ 'actionToggle' ]),

      search () {
        this.actionToggle({ key: 'search', value: !this.toggle.search })
      },

      drawer () {
        this.actionToggle({ key: 'drawer', value: !this.toggle.drawer })
      },

      getBackground () {
        if (this.keyFind(this.$route.meta, 'background')) return this.$route.meta.toolbar.background
        return require('@/assets/img/duckstack-banner.jpg')
      }
    }
  }
</script>
