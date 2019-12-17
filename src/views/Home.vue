<template>
  <v-container
    class="px-0 mx-0 mx-auto max-width-412"
  >
    <v-card
      v-if="loading"
      class="text-center transparent"
    >
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      />
    </v-card>

    <v-card
      v-else
      class="pa-4 transparent"
    >
      <v-card-text>
        <v-text-field
          v-for="(keys, i) in uri"
          :id="`password-${i}`"
          :key="`password-${i}`"
          v-model="uri[i]"
          color="primary"
          readonly
          append-outer-icon="mdi-content-copy"
          @click:append-outer="copy(`password-${i}`)"
        />
      </v-card-text>

      <v-card-actions>
        <v-btn
          class="mx-auto"
          width="256"
          height="56"
          color="primary"
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
        document.getElementById(value).select()
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
