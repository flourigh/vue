<template>
  <v-container
    class="px-0 mx-0 mx-auto max-width-412 pb-5"
  >
    <v-card
      class="pa-4"
    >
      <v-card-text>
        <p class="display-1 text--primary">
          {{ page.description }}
        </p>

        <p>{{ page.subject }}</p>

        <div class="text--primary">
          {{ page.name }}
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="accent"
          large
          block
          @click="action()"
        >
          Ser um {{ title }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState('Document', [ 'title', 'page' ])
    },

    methods: {
      action () {
        this.$router.push(`/comecar/${this.$uuid()}`)
      }
    }
  }
</script>
