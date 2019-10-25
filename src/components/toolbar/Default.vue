<template>
  <v-card
    height="176"
    width="375"
    class="mx-auto"
    flat
    tile
  >
    <v-toolbar
      color="transparent"
      prominent
      flat
      src="https://picsum.photos/1920/1080?random"
      dark
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        />
      </template>

      <v-app-bar-nav-icon
        @click="drawer()"
      />

      <v-toolbar-title class="pb-5 mb-5">
        {{ title }}
      </v-toolbar-title>

      <v-spacer />

      <v-btn icon>
        <v-icon>
          mdi-magnify
        </v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-autocomplete
          placeholder="Buscar"
          :items="states"
          rounded
          solo
          light
        />
      </template>
    </v-toolbar>
  </v-card>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    data: () => ({
      states: [
        'Alabama', 'Alaska', 'American Samoa', 'Arizona',
        'Arkansas', 'California', 'Colorado', 'Connecticut',
        'Delaware', 'District of Columbia', 'Federated States of Micronesia',
        'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
        'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
        'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
        'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
        'Missouri', 'Montana', 'Nebraska', 'Nevada',
        'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
        'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
        'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
        'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
        'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
        'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
      ]
    }),

    computed: {
      ...mapState('Document', [ 'title', 'toggle' ])
    },

    methods: {
      ...mapActions('Document', [ 'actionToggle' ]),

      drawer () {
        this.actionToggle({ key: 'drawer', value: !this.toggle.drawer })
      }
    }
  }
</script>
