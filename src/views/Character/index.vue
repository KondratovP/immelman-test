<template>
  <character-component />
</template>

<script>
export default {
  name: "character-view",
  components: {
    "character-component": () => import("@/components/CharacterComponent.vue")
  }
};
</script>
