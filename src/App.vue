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

    <router-view />

    <router-view
      name="footer"
    />
  </v-app>
</template>
