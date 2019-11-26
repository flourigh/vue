<template>
  <v-app
    light
  >
    <router-view
      name="toolbar"
    />

    <router-view />

    <router-view
      name="footer"
    />
  </v-app>
</template>
