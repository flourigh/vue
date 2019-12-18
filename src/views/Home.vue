<template>
  <v-container
    class="px-0 mx-0 mx-auto max-width-412"
  >
    <div
      v-if="loading"
      class="text-center"
    >
      <v-dialog
        v-model="loading"
        persistent
        width="300"
      >
        <v-card
          color="primary"
          dark
        >
          <v-card-text
            class="py-5"
          >
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            />
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>

    <div
      v-else
      class="text-center"
    >
      <v-dialog
        v-model="uri"
        persistent
        content-class="max-width-412 min-height-320"
      >
        <v-card
          class="pa-4 transparent"
          flat
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
              color="primary"
              dark
              absolute
              bottom
              right
              fab
              @click="getPassword()"
            >
              <v-icon>
                mdi-cached
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
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
