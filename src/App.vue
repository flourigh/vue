<template>
  <v-app
    light
  >
    <router-view
      name="toolbar"
    />

    <router-view
      name="drawer"
    />

    <v-content>
      <v-container
        fluid
      >
        <router-view />
      </v-container>
    </v-content>

    <router-view
      name="footer"
    />
  </v-app>
</template>
