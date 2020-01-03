<template>
  <v-toolbar
    color="black"
    absolute
    width="100%"
  >
    <v-spacer />

    <v-menu
      :close-on-content-click="false"
      :nudge-width="290"
      offset-y
    >
      <template v-slot:activator="{ on }">
        <div
          v-on="on"
        >
          <v-progress-circular
            v-if="login.loading"
            indeterminate
            color="white"
          />

          <v-avatar
            v-else
            size="36"
          >
            <v-img
              v-if="login.status && login.user.avatar"
              :src="login.user.avatar"
              :alt="login.user.name"
            />

            <v-icon
              v-else
              dark
              :color="login.user.avatar ? 'white' : 'success'"
            >
              {{ login.user.avatar ? login.user.avatar : 'mdi-checkbox-blank-circle-outline' }}
            </v-icon>
          </v-avatar>
        </div>
      </template>

      <v-card
        v-if="login.status"
      >
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-icon
                dark
              >
                mdi-account-circle
              </v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>
                {{ login.user.name }}
              </v-list-item-title>

              <v-list-item-subtitle>
                {{ login.user.email }}
              </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon
                dark
                @click="logout()"
              >
                mdi-logout
              </v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>

      <div
        v-else
      >
        <div
          class="my-3"
        >
          <v-list
            color="blue"
            class="ma-0 pa-0"
          >
            <v-btn
              class="transparent"
              block
              x-large
              @click="google()"
            >
              Google
            </v-btn>
          </v-list>
        </div>

        <div
          class="my-3"
        >
          <v-list
            color="red"
            class="ma-0 pa-0"
          >
            <v-btn
              class="transparent"
              block
              x-large
              @click="microsoft()"
            >
              Microsoft
            </v-btn>
          </v-list>
        </div>
      </div>
    </v-menu>
  </v-toolbar>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState('Login', ['login'])
    },

    created () {
      this.status()
    },

    methods: {
      ...mapActions('Login', ['status', 'google', 'microsoft', 'logout'])
    }
  }
</script>
