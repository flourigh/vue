<template>
  <v-footer
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

    {{ new Date().getFullYear() }}

    <v-btn
      v-if="$route.name !== 'home'"
      color="accent"
      fab
      fixed
      bottom
      right
      @click="getHome()"
    >
      <v-icon>
        mdi-plus
      </v-icon>
    </v-btn>
  </v-footer>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState('Document', ['footer'])
    },

    methods: {
      getHome () {
        if (this.$route.name !== 'home') this.$router.push('/')
      }
    }
  }
</script>
