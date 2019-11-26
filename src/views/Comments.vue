<template>
  <v-container
    class="px-0 mx-0 mx-auto max-width-412 pb-5"
  >
    <v-card
      class="pa-4"
    >
      <v-card-text>
        <div class="text--primary">
          Seu URI: {{ $route.params.uri }}
        </div>
      </v-card-text>

      <div class="comments">
        <vue-disqus
          shortname="socialcomment"
          :title="$route.params.uri"
          :identifier="$route.params.uri"
          :url="getUrl()"
        />
      </div>
    </v-card>
  </v-container>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState('Document', [ 'page' ])
    },

    methods: {
      getUrl () {
        return location.href
      }
    }
  }
</script>
