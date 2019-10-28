<template>
  <v-card
    height="188"
    width="412"
    class="mx-auto"
    flat
    tile
  >
    <v-toolbar
      color="transparent"
      prominent
      extended
      flat
      :src="getBackground()"
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

      <v-img
        :src="getLogo()"
        contain
        class="pt-5 mt-5"
        height="64"
        width="270"
      />

      <!-- {{ $vuetify.breakpoint.width }} -->

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
              :items="categoria('home', 'nome')"
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
      ...mapState('Document', [ 'toggle' ]),
      ...mapState('Search', [ 'catalog' ]),
      ...mapGetters('Search', [ 'categoria' ])
    },

    watch: {
      'form.input.search' (value) {
        this.gotoCategoria({ categoria: this.catalog.home.filter(o => o.nome === value)[0].categoria })
      }
    },

    methods: {
      ...mapActions('Document', [ 'actionToggle' ]),

      drawer () {
        this.actionToggle({ key: 'drawer', value: !this.toggle.drawer })
      },

      search () {
        this.actionToggle({ key: 'search', value: !this.toggle.search })
      },

      gotoCategoria (next) {
        this.$router.push(`/categoria/${next.categoria}`)
      },

      getBackground () {
        if (this.keyFind(this.$route.meta, 'background')) return this.$route.meta.toolbar.background
        return require('@/assets/img/pessoas-levantando-instrumentos.png')
      },

      getLogo () {
        if (this.keyFind(this.$route.meta, 'logo')) return this.$route.meta.toolbar.logo
        return require('@/assets/img/logo-sommexe.png')
      }
    }
  }
</script>
