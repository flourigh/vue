<template>
  <v-app
    :style="`background: ${theme}`"
  >
    <router-view />
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
