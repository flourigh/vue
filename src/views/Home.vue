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
          v-for="(keys, i) in uri"
          :key="i"
          v-model="uri[i]"
          color="white"
        />
      </v-card-text>

      <v-card-actions>
        <v-btn
          class="mx-auto"
          width="256"
          height="56"
          color="accent"
          large
          @click="action()"
        >
          Nova senha
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'

  import Axios from 'axios'

  export default {
    data: function () {
      return {
        uri: undefined
      }
    },

    computed: {
      ...mapState('Document', ['page'])
    },

    mounted () {
      this.getPassword()
    },

    methods: {
      action (uri) {
        this.$router.push('/')
      },

      getPassword () {
        Axios.get('https://api.redire.me/password')
          .then(response => {
            this.uri = response.data
          })
      }
    }
  }
</script>
