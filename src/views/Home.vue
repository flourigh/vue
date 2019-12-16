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
          :id="`password-${i}`"
          :key="`password-${i}`"
          v-model="uri[i]"
          color="accent"
          readonly
          :loading="loading"
          append-icon="mdi-content-copy"
          @click:append="copy(`password-${i}`)"
        />
      </v-card-text>

      <v-card-actions>
        <v-btn
          class="mx-auto"
          width="256"
          height="56"
          color="accent"
          large
          @click="getPassword()"
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
        uri: undefined,
        loading: false
      }
    },

    computed: {
      ...mapState('Document', ['page'])
    },

    mounted () {
      this.getPassword()
    },

    methods: {
      copy (value) {
        const copyText = document.getElementById(value)
        copyText.select()
        copyText.setSelectionRange(0, 99999)
        document.execCommand('copy')
      },

      getPassword () {
        this.loading = true
        Axios.get('https://api.redire.me/password')
          .then(response => {
            this.uri = response.data
            setTimeout(() => {
              this.loading = false
            }, 1920)
          })
      }
    }
  }
</script>
