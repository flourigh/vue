<template>
  <v-container
    class="pa-0 ma-0 mx-auto max-width-480 white"
  >
    <v-card
      class="pa-0 ma-0 mb-5 pb-5 white"
      flat
      tile
    >
      <v-img
        :src="item($route.params, 'imagem')"
        class="pa-0 ma-0 elevation-4"
      >
        <v-card-title
          class="error--text pa-0 ma-0 pt-5 mt-5 mr-5"
        >
          <v-spacer />
          <h2>
            {{ item($route.params, 'nome') }}
          </h2>
        </v-card-title>

        <v-card-title
          class="error--text pa-0 ma-0 mr-5"
        >
          <v-spacer />
          <h3>
            {{ item($route.params, 'descricao') }}
          </h3>
        </v-card-title>

        <v-card-subtitle
          class="text-right pt-1 mt-5"
        >
          <h1 class="white--text pb-4">
            R$ {{ item($route.params, 'preco') }}
          </h1>

          <v-btn
            class="ma-2"
            color="accent"
            dark
            small
            rounded
            @click="addCart()"
          >
            Compre já
            <v-icon
              dark
              right
              color="red"
            >
              add_shopping_cart
            </v-icon>
          </v-btn>

          <v-container>
            <v-row
              v-for="(especificacaoList, iList) in item($route.params, 'especificacao')"
              :key="iList"
              class="mb-2"
              justify="end"
              no-gutters
            >
              <v-col
                class="white--text max-width-110"
              >
                <h4>{{ especificacaoList[0] }}</h4>
              </v-col>

              <v-col
                class="white--text max-width-80"
              >
                <h4>{{ item($route.params, 'especificacao')[iList][1] }}</h4>
              </v-col>
            </v-row>
          </v-container>
        </v-card-subtitle>
      </v-img>
    </v-card>
  </v-container>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  import keyFind from '@/plugins/mixins/keyfind'

  export default {
    mixins: [
      keyFind
    ],

    computed: {
      ...mapState('Search', [ 'link', 'catalog' ]),
      ...mapGetters('Search', [ 'item' ])
    },

    created () {
      if (
        !this.keyFind(this.catalog.categoria, this.$route.params.categoria) ||
        !this.keyFind(this.catalog.categoria, this.$route.params.marca)
      ) this.$router.push('/')
    },

    methods: {
      addCart () {
        let url = {
          nome: this.item(this.$route.params, 'nome'),
          descricao: this.item(this.$route.params, 'descricao'),
          preco: this.item(this.$route.params, 'preco')
        }

        window.open(encodeURI(`${this.link.cart}${url.nome}\n${url.descricao}\n${url.preco}`), '_blank')
      }
    }
  }
</script>
