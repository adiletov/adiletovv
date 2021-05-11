<template>
  <div style="z-index: 10; position: sticky; top: 0">
    <v-app-bar
        style="z-index: 10; box-shadow: none"
        color="deep-purple accent-4"
        dense
        dark
    >
      <v-app-bar-nav-icon @click="navClick"></v-app-bar-nav-icon>
      <v-toolbar-title>Frontend разработчик</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  methods: {
    navClick(){
      this.$emit('navClick')
    }
  }
}
</script>