<template>
  <v-container
    class="px-0 mx-0 mx-auto max-width-412 text-center"
  >
    <h1
      v-text="page.title"
    />
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState('Document', ['page'])
    }
  }
</script>
