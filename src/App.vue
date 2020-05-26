<template>
  <v-app>
    <v-card
      height="max-content"
      width="300"
      class="history-card text-center mx-auto px-12 py-12"
    >
      <div class="overline mb-9">viewed characters</div>
      <history-c />
    </v-card>
    <router-view />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data: () => ({}),
  components: {
    "history-c": () => import("@/components/History.vue")
  }
});
</script>

<style lang="scss" scoped>
.history-card {
  position: absolute;
  top: 200px;
  left: 100px;
}
</style>
