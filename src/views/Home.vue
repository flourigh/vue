<template>
  <v-container
    class="px-0 mx-0 mx-auto max-width-412 pb-5"
  >
    <v-card
      class="pa-4"
    >
      <v-card-text>
        <p class="display-1 text--primary">
          {{ page.title }}
        </p>

        <div class="text--primary">
          Digite um nome para sua página de comentários
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="accent"
          large
          block
          @click="action()"
        >
          Criar página
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState('Document', [ 'page' ])
    },

    methods: {
      action () {
        this.$router.push(`/comecar/${this.$uuid()}`)
      }
    }
  }
</script>
