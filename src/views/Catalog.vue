<template>
  <v-container
    class="pa-0 ma-0 mx-auto max-width-480 pb-5"
  >
    <v-card
      v-for="(next, i) in catalog.home"
      :key="i"
      class="pa-0 ma-0 mb-5 pb-5 white"
      flat
      tile
      dark
    >
      <v-img
        :src="next.imagem"
        class="pa-0 ma-0 elevation-4"
      >
        <v-card-title>
          <v-spacer />

          {{ next.nome }}

          <v-spacer />
        </v-card-title>

        <v-card-subtitle
          class="text-right pt-4"
        >
          <h1 class="pb-2">
            R$ {{ next.preco }}
          </h1>

          <v-btn
            class="ma-2"
            color="accent"
            dark
            small
            rounded
            @click="addCart(next)"
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
        </v-card-subtitle>

        <v-card-actions>
          <v-spacer />

          <v-btn
            text
            small
            @click="gotoItem(next)"
          >
            Ver mais
          </v-btn>

          <v-btn
            text
            small
            @click="gotoCategoria(next)"
          >
            Modelos no carrinho
          </v-btn>
        </v-card-actions>
      </v-img>
    </v-card>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState('Search', [ 'link', 'catalog' ])
    },

    methods: {
      gotoItem (next) {
        location.assign(`/item/${next.categoria}/${next.descricao.replace(/ /g, '').toLowerCase()}`)
      },

      gotoCategoria (next) {
        location.assign(`/categoria/${next.categoria}`)
      },

      addCart (next) {
        let url = {
          nome: next.nome,
          descricao: next.descricao,
          preco: next.preco
        }

        window.open(encodeURI(`${this.link.cart}${url.nome}\n${url.descricao}\n${url.preco}`), '_blank')
      }
    }
  }
</script>
