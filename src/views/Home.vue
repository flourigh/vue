<template>
  <v-container
    class="px-0 mx-0 mx-auto max-width-412"
  >
    <v-snackbar
      v-model="snackbar.active"
      :timeout="1920"
      color="primary"
      class="white--text"
    >
      <div
        class="mx-auto"
        v-html="snackbar.text"
      />
    </v-snackbar>

    <v-dialog
      v-model="loading"
      persistent
      width="300"
      content-class="border-radius-0"
      hide-overlay
    >
      <div class="janrubio text-center">
        <div
          v-for="shaft in 5"
          :key="shaft"
          :class="`shaft ${shaft}`"
        />
      </div>
    </v-dialog>

    <v-dialog
      v-model="active"
      persistent
      content-class="max-width-412"
    >
      <v-card
        class="transparent"
        flat
      >
        <v-expansion-panels
          v-model="panels"
          class="pb-5"
          accordion
          multiple
        >
          <v-card-text
            v-for="(keys, i) in passwords"
            :key="`password-${i}`"
            class="pa-0 ma-0"
          >
            <v-expansion-panel
              class="transparent"
            >
              <v-expansion-panel-header>
                {{ i }}
              </v-expansion-panel-header>

              <v-expansion-panel-content
                class="pb-4"
              >
                <v-text-field
                  :id="`password-${i}`"
                  :value="keys"
                  color="primary"
                  readonly
                  hide-details
                  append-outer-icon="mdi-content-copy"
                  @click:append-outer="copy(`password-${i}`, i, keys)"
                />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-card-text>
        </v-expansion-panels>

        <v-card-actions>
          <v-spacer
            class="px-4"
          >
            <v-progress-linear
              v-model="timeout.value"
              :active="timeout.show"
              :indeterminate="timeout.query"
              :query="true"
              rounded
            />
          </v-spacer>

          <v-btn
            color="primary"
            dark
            fab
            small
            @click="mount()"
          >
            <v-icon
              color="white"
            >
              mdi-cached
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  import Axios from 'axios'

  export default {
    data: function () {
      return {
        panels: [0],

        timeout: {
          value: 0,
          query: false,
          show: true,
          interval: 0
        },

        snackbar: {
          active: false,
          text: false
        },

        passwords: undefined,
        loading: true,
        active: false
      }
    },

    computed: {
      ...mapState('Document', ['page'])
    },

    mounted () {
      this.start()
      this.mount()
    },

    beforeDestroy () {
      clearInterval(this.interval)
    },

    methods: {
      ...mapActions('Document', ['Password']),

      copy (id, i, key) {
        document.getElementById(id).select()
        document.execCommand('copy')

        this.snackbar.active = true
        this.snackbar.text = `${i}: ${key} copiado`
      },

      start: function () {
        setInterval(() => {
          this.reload()
          this.mount()
        }, 60000)
      },

      mount () {
        Axios.get('https://api.redire.me/password')
          .then(response => {
            this.reload()
            setTimeout(() => {
              this.passwords = response.data
              this.progressout()
            }, 960)
          })
      },

      reload () {
        this.loading = true
        this.active = false

        setTimeout(() => {
          this.loading = false
          this.active = true
        }, 1920)
      },

      progressout () {
        this.timeout.query = true
        this.timeout.show = true
        this.timeout.value = 0
        const time = 100

        setTimeout(() => {
          this.timeout.query = false
          this.timeout.interval = setInterval(() => {
            if (this.timeout.value === time) {
              clearInterval(this.timeout.interval)
              this.timeout.show = false
              return setTimeout(this.progressout, 2000)
            }
            this.timeout.value += 2
          }, 1000)
        }, 2500)
      }
    }
  }
</script>
