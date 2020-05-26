<template>
  <v-row>
    <v-col class="my-4">
      <v-card flat height="115px">
        <v-toolbar-title class="text-center">
          search and choose
        </v-toolbar-title>
        <v-toolbar color="elevation-0">
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-text-field
            v-model="search"
            placeholder="search through swapi characters"
            hide-details
            single-line
            @change="() => toggleSearch()"
            @keydown="() => toggleSearch()"
          />
        </v-toolbar>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { swapiMapper } from "@/store/swapi";

const Mappers = Vue.extend({
  computed: {
    ...swapiMapper.mapGetters(["currentItems"])
  },
  methods: {
    ...swapiMapper.mapActions(["initCharacters", "searchThroughCharacters"])
  }
});

@Component({
  data: () => ({
    search: ""
  })
})
export default class SearchBar extends Mappers {
  @Prop({ default: "" })
  prop!: "";

  search!: string;

  public toggleSearch() {
    this.throttle(() => this.searchThroughCharacters({ search: this.search }));
  }

  private throttle(func: any) {
    let timerId;
    if (timerId) {
      return;
    }
    timerId = setTimeout(() => {
      func();
      timerId = undefined;
    }, 500);
  }
}
</script>

<style lang="scss" scoped></style>
