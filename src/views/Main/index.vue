<template>
  <div>
    <search-bar />
    <character-list />
  </div>
</template>

<script>
import app from "@/main";

export default {
  name: "main-view",
  components: {
    "search-bar": () => import("@/components/SearchBar.vue"),
    "character-list": () => import("@/components/CharacterList.vue")
  },
  beforeRouteEnter(to, from, next) {
    app.$store
      .dispatch("swapi/initCharacters")
      .then(characters => {
        if (characters) {
          next();
        }
      })
      .catch(() => app.$router.push({ name: "not-found" }));
  }
};
</script>
