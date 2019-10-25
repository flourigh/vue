<template>
  <v-card
    class="max-width-375 mx-auto"
  >
    <v-card-title>
      {{ title }}
    </v-card-title>
  </v-card>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState('Document', [ 'title' ])
    }
  }
</script>
