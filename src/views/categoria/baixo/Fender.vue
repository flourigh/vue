<template>
  <v-container
    class="pa-0 ma-0 mx-auto max-width-375 white"
  >
    <v-card
      v-for="(next, i) in catalog.categorias.baixoFender.fender.nome"
      :key="i"
      class="pa-0 ma-0 mb-5 pb-5 white"
      flat
      tile
    >
      <v-card-title>
        {{ next }}
      </v-card-title>

      <v-card-text>
        {{ catalog.categorias.baixoFender.fender.descricao[i] }}
        <br>
        {{ catalog.categorias.baixoFender.fender.preco[i] }}
        <br>
        {{ catalog.categorias.baixoFender.fender.especificacao[i] }}
      </v-card-text>
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
