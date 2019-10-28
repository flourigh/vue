<template>
  <v-footer
    color="white"
    class="max-width-412 mx-auto"
    absolute
    app
  >
    <v-btn
      v-for="(next, i) in footer.icon"
      :key="i"
      property="sameAs"
      class="mx-0"
      :href="footer.link[i]"
      :title="footer.link[i]"
      :alt="footer.link[i]"
      target="blank"
      icon
    >
      <v-icon>
        {{ next }}
      </v-icon>
    </v-btn>

    <v-spacer />

    {{ new Date().getFullYear() }}
  </v-footer>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState('Document', [ 'footer' ])
    }
  }
</script>
