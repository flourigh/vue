<template>
  <v-container
    class="pa-0 ma-0 mx-auto max-width-412 white"
  >
    <v-card
      v-for="(next, i) in list.nome"
      :key="i"
      class="pa-0 ma-0 mb-5 pb-5 white"
      flat
      tile
    >
      <v-img
        :src="returnList('imagem')[i]"
        class="pa-0 ma-0 elevation-4"
      >
        <v-card-title
          class="white--text pa-0 ma-0 pt-5 mt-5 mr-5"
        >
          <v-spacer />
          <h4 class="text-uppercase">
            Modelos
          </h4>
        </v-card-title>

        <v-card-title
          class="error--text pa-0 ma-0 pt-5 mt-5 mr-5"
        >
          <v-spacer />
          <h2>
            {{ next }}
          </h2>
        </v-card-title>

        <v-card-title
          class="error--text pa-0 ma-0 mr-5"
        >
          <v-spacer />
          <h3>
            {{ returnList('descricao')[i] }}
          </h3>
        </v-card-title>

        <v-card-subtitle
          class="text-right pt-1 mt-5"
        >
          <h1 class="white--text pb-4">
            R$ {{ returnList('preco')[i] }}
          </h1>

          <v-btn
            class="ma-2"
            color="accent"
            dark
            small
            rounded
            @click="addCart(next, i)"
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
              v-for="(item, iList) in returnList('especificacao')[i]"
              :key="iList"
              class="mb-2"
              justify="end"
              no-gutters
            >
              <v-col
                class="white--text max-width-110"
              >
                <h4>{{ returnList('especificacao')[i][iList][0] }}</h4>
              </v-col>

              <v-col
                class="white--text max-width-80"
              >
                <h4>{{ returnList('especificacao')[i][iList][1] }}</h4>
              </v-col>
            </v-row>
          </v-container>
        </v-card-subtitle>
      </v-img>
    </v-card>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    props: {
      list: {
        type: Object,
        default: undefined
      }
    },

    computed: {
      ...mapState('Search', [ 'link', 'catalog' ])
    },

    methods: {
      returnList (key) {
        return this.catalog.categoria.baixo.fender[key]
      },

      addCart (next, i) {
        let url = {
          descricao: this.returnList('descricao')[i],
          preco: this.returnList('preco')[i]
        }

        window.open(encodeURI(`${this.link.cart}${next}\n${url.descricao}\n${url.preco}`), '_blank')
      }
    }
  }
</script>
