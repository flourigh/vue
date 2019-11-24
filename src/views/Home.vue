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

        <v-text-field
          v-model="uri"
          color="white"
          label="Digite um nome para seu URI"
          @keydown.enter="action(uri)"
        />
      </v-card-text>

      <v-card-actions>
        <v-btn
          class="mx-auto"
          width="256"
          height="56"
          color="accent"
          large
          @click="action(uri)"
        >
          Criar página
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-card
      class="pa-4 mt-3"
    >
      <v-card-text>
        <span>
          Este app tem como objetivo ser uma área destinada a criação de qualquer tipo de conteúdo livre de moderação.
        </span>

        <v-divider
          class="mt-4 mb-5"
        />

        <span>
          As regras deste app são as leis do estado e país que você se encontra ao digitar algum conteúdo.
        </span>

        <v-divider
          class="mt-4 mb-5"
        />

        <span>
          Comentários Anonimos não não permitidos, logo você precisa de um Login Social de sua preferencia.
        </span>

        <v-divider
          class="mt-4 mb-5"
        />

        <span>
          Você pode criar um URI de sua escolha, caso este já exista, você será direcionado para o URI existente.
          Caso não queira criar um URI de sua escolha, o URI será gerado automaticamente.
        </span>

        <v-divider
          class="mt-4 mb-5"
        />

        <span>
          Para ver todos os seus URIs você pode entrar no Botão "Comunidade" presente no topo da lista de comentários.
        </span>

        <v-divider
          class="mt-4 mb-5"
        />

        <span>
          Você pode instalar o App Disqus caso queira, não é uma obrigação.
        </span>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data: function () {
      return {
        uri: undefined
      }
    },

    computed: {
      ...mapState('Document', [ 'page' ])
    },

    methods: {
      action (uri) {
        if (uri) {
          this.$router.push(`/${uri}`)
          return
        }

        this.$router.push(`/${this.$uuid()}`)
      }
    }
  }
</script>
