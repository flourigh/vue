<template>
  <v-container
    class="pa-0 ma-0 mx-auto max-width-375 white"
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
          >
            Ver mais
          </v-btn>

          <v-btn
            text
            small
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
      ...mapState('Search', [ 'catalog' ])
    }
  }
</script>
