<template>
  <v-card
    height="188"
    width="375"
    class="mx-auto"
    flat
    tile
  >
    <v-toolbar
      color="transparent"
      prominent
      flat
      :src="require('@/assets/img/pessoas-levantando-instrumentos.png')"
      height="140"
      dark
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
        />
      </template>

      <v-app-bar-nav-icon
        @click="drawer()"
      />

      <v-toolbar-title
        class="pb-5 mb-5"
      >
        <v-img
          :src="require('@/assets/img/logo-sommexe.png')"
          contain
          height="64"
        />
      </v-toolbar-title>

      <v-btn
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
            <v-autocomplete
              v-model="form.input.search"
              :rules="form.rules.search"
              placeholder="Buscar"
              :items="categorias('home', 'nome')"
              rounded
              solo
              light
              dense
              auto-select-first
              no-data-text="Não achei ):"
              autofocus
              append-icon=""
              color="accent"
              item-color="accent"
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
  import { mapState, mapActions, mapGetters } from 'vuex'

  export default {
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
      ...mapState('Document', [ 'toggle' ]),
      ...mapState('Search', [ 'catalog' ]),
      ...mapGetters('Search', [ 'categorias' ])
    },

    methods: {
      ...mapActions('Document', [ 'actionToggle' ]),

      drawer () {
        this.actionToggle({ key: 'drawer', value: !this.toggle.drawer })
      },

      search () {
        this.actionToggle({ key: 'search', value: !this.toggle.search })
      }
    }
  }
</script>
