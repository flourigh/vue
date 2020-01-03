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
      hide-overlay
      no-click-animation
    >
      <v-card
        class="transparent"
        flat
      >
        <v-expansion-panels
          v-model="panels"
          class="min-height-64"
          mandatory
        >
          <v-card-text
            v-for="(keys, i) in passwords"
            :key="`password-${i}`"
            class="pa-0 ma-0"
          >
            <v-expansion-panel
              class="transparent"
            >
              <v-expansion-panel-content>
                <v-text-field
                  :id="`password-${i}`"
                  :value="keys"
                  color="success"
                  readonly
                  hide-details
                  solo
                  :disabled="timeout.indeterminate"
                  append-outer-icon="mdi-content-copy"
                  @click="copy(`password-${i}`, i, keys)"
                  @click:append-outer="copy(`password-${i}`, i, keys)"
                />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-card-text>
        </v-expansion-panels>

        <v-card-actions>
          <v-slide-group
            v-model="panels"
            center-active
            mandatory
            class="mx-auto"
          >
            <v-slide-item
              v-for="value in passwords"
              :key="value"
              v-slot:default="{ active, toggle }"
            >
              <v-card
                :color="active ? 'primary' : 'grey darken-1'"
                class="ma-4"
                height="32"
                width="32"
                @click="toggle"
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <v-scale-transition>
                    <v-icon
                      v-if="active"
                      color="white"
                      size="16"
                      v-text="'mdi-check'"
                    />
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-card-actions>

        <v-card-actions>
          <v-spacer
            class="px-4"
          >
            <v-progress-linear
              v-model="timeout.value"
              :buffer-value="timeout.buffer"
              :active="timeout.active"
              :indeterminate="timeout.indeterminate"
              :query="true"
              rounded
            />
          </v-spacer>

          <v-btn
            color="primary"
            dark
            fab
            small
            @click="reload()"
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
        panels: 0,

        conf: {
          interval: 960,
          reload: 60000
        },

        timeout: {
          value: 0,
          buffer: 0,
          active: true,
          indeterminate: false,
          interval: undefined
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
    },

    methods: {
      ...mapActions('Document', ['Password']),

      start: function () {
        this.mount()

        this.loading = true
        this.active = false

        setInterval(() => {
          this.mount()
        }, this.conf.reload)
      },

      reload () {
        this.timeout.indeterminate = true
        this.mount()
      },

      copy (id, i, key) {
        document.getElementById(id).select()
        document.execCommand('copy')

        this.snackbar.active = true
        this.snackbar.text = `${i}: ${key} copiado`
      },

      mount () {
        Axios.get('https://api.redire.me/password')
          .then(response => {
            setTimeout(() => {
              clearInterval(this.timeout.interval)
              this.progressout()
              this.loading = false
              this.active = true
              this.passwords = response.data
            }, this.conf.interval)
          })
      },

      progressout () {
        this.timeout.value = 0
        this.timeout.buffer = 100
        this.timeout.active = true
        this.timeout.indeterminate = true

        const calc = (((this.timeout.buffer * 1000) - (this.conf.interval * 2)) / this.conf.reload)

        setTimeout(() => {
          this.timeout.indeterminate = false
          this.timeout.interval = setInterval(() => {
            if (this.timeout.value >= this.timeout.buffer) {
              clearInterval(this.timeout.interval)
              this.timeout.active = false
              return setTimeout(this.progressout, this.conf.interval)
            }
            this.timeout.value += calc
          }, 1000)
        }, this.conf.interval)
      }
    }
  }
</script>
