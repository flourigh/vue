<template>
  <v-toolbar>
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
              v-if="login.status"
              :src="login.user.avatar"
              :alt="login.user.name"
            />

            <v-icon
              v-else
              dark
            >
              {{ login.user.avatar }}
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

      <v-list
        v-else
        color="blue"
        class="ma-0 pa-0"
      >
        <v-btn
          class="transparent"
          block
          x-large
          @click="socialLogin('google')"
        >
          Google
        </v-btn>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState('Login', ['login'])
    },

    methods: {
      ...mapActions('Login', ['sign', 'loading', 'google', 'logout']),

      socialLogin (method) {
        this.google(this.$firebase)
      }
    }
  }
</script>
