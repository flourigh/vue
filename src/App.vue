<template>
  <v-app
    id="inspire"
    :style="`background: ${theme}`"
  >
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <router-view />
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    computed: {
      theme () {
        if (this.$vuetify.theme.dark) return this.$vuetify.theme.themes.dark.background
        return this.$vuetify.theme.themes.light.background
      }
    }
  }
</script>
