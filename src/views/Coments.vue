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
          shortname="socialcomenter"
        />
      </div>
    </v-card>
  </v-container>
</template>
