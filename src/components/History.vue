<template>
  <div class="d-flex align-center flex-column" v-if="history.length">
    <v-chip class="mb-5" v-for="(item, index) in history" :key="index">
      <v-btn text link @click="() => pushCurrentCharacter(item)">
        <span class="overline">
          {{ item.name }}
        </span>
      </v-btn>
    </v-chip>

    <v-btn text color="error" @click="() => clearHistory()">
      <span class="overline">clear</span>
    </v-btn>
  </div>
  <div v-else>
    {{ null }}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { swapiMapper } from "@/store/swapi";

const Mappers = Vue.extend({
  computed: {
    ...swapiMapper.mapGetters(["history"])
  },
  methods: {
    ...swapiMapper.mapActions([
      "updateCurrentCharacter",
      "pushToHistory",
      "clearHistory",
      "removeCurrentCharacter"
    ])
  }
});
@Component({
  data: () => ({})
})
export default class HistoryC extends Mappers {
  public async pushCurrentCharacter(item: { id: number; name: string }) {
    if (this.$route.params.name === item.name) return;
    await this.removeCurrentCharacter();
    await this.updateCurrentCharacter(item.id);
    this.$router.push({ name: "Character", params: { name: item.name } });
  }
}
</script>

<style lang="scss" scoped></style>
