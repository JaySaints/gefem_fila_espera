<template>
    <v-app id="inspire">
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },

  data: () => ({
    //
  })
}
</script>

<style>
.v-main__wrap {
  background-color: rgb(215, 228, 238);
}
</style>
