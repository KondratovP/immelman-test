<template>
  <v-card v-if="character" class="mx-auto my-12" max-width="374">
    <v-img height="250" src="@/assets/default.png" contain />

    <v-card-title v-html="character.name" />

    <v-card-text>
      <div class="my-4 subtitle-1">height - {{ character.height }}</div>
      <div>birth year - {{ character.birth_year }}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-list-group class="px-3">
      <v-card-text class="subtitle-1">featured films</v-card-text>
      <v-list-item v-for="(link, i) in character.films" :key="i">
        <v-btn color="info" text link :href="link"> {{ link }} </v-btn>
      </v-list-item>
    </v-list-group>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="() => backToSearch()">
        go back to search
      </v-btn>
    </v-card-actions>
  </v-card>
  <div v-else>sorry, something went wrong</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { SwapiCharacterModel } from "@/types/swapiModels";
import { swapiMapper } from "@/store/swapi";

const Mappers = Vue.extend({
  computed: {
    ...swapiMapper.mapGetters(["currentCharacter"])
  },
  methods: {
    ...swapiMapper.mapActions(["removeCurrentCharacter"])
  }
});

@Component({
  data: () => ({
    character: null as SwapiCharacterModel | null
  })
})
export default class CharacterComponent extends Mappers {
  character!: SwapiCharacterModel | null;
  mounted() {
    if (this.currentCharacter) {
      this.character = this.currentCharacter;
    }
  }
  beforeDestroy() {
    this.removeCurrentCharacter();
  }
  public backToSearch() {
    this.$router.push("/");
  }
}
</script>

<style lang="scss" scoped></style>
