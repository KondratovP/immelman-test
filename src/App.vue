<template>
  <v-app color="secondary">
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data: () => ({})
});
</script>

<style lang="scss" scoped></style>
