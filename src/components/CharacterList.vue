<template>
  <v-overlay v-if="isLoading" :value="isLoading">
    <v-progress-circular indeterminate size="64"></v-progress-circular>
  </v-overlay>
  <div v-else>
    <v-card class="mx-auto mb-7" max-width="750" tile>
      <v-list three-line avatar rounded>
        <v-subheader> results </v-subheader>
        <v-list-item-group color="primary">
          <v-list-item
            @click="() => pushCurrentCharacter(item)"
            v-for="(item, i) in items"
            :key="i"
          >
            <v-list-item-avatar>
              <v-img src="@/assets/default.png"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.name" />
              <v-list-item-subtitle v-html="item.birth_year" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>

    <pagination-wrapper
      class="mb-12"
      @pageUpdate="val => (page = val)"
      :page.sync="page"
      :total="total"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { SwapiCharacterModel } from "@/types/swapiModels";
import { swapiMapper } from "@/store/swapi";

const Mappers = Vue.extend({
  computed: {
    ...swapiMapper.mapGetters(["currentItems", "currentSearch", "total"])
  },
  methods: {
    ...swapiMapper.mapActions([
      "initCharacters",
      "searchThroughCharacters",
      "updateCurrentCharacter",
      "pushToHistory"
    ])
  }
});

@Component({
  data: () => ({
    items: null as Array<SwapiCharacterModel> | null,
    isLoading: true,
    page: 1,
    totalItems: 0
  }),
  components: {
    "pagination-wrapper": () => import("@/components/PaginationWrapper.vue")
  }
})
export default class CharacterList extends Mappers {
  @Prop({ default: "" })
  prop!: "";

  page!: number;
  totalItems!: number;
  isLoading!: boolean;
  items!: Array<SwapiCharacterModel> | null;
  mounted() {
    if (this.currentItems) {
      setTimeout(() => {
        this.items = [...this.currentItems];
        this.totalItems = this.total;
        this.isLoading = false;
      }, 900);
    }
  }

  public async pushCurrentCharacter(item: SwapiCharacterModel) {
    const cloned = { ...item };
    const id = Number(
      cloned.url.replace("http://swapi.dev/api/people/", "").replace("/", "")
    );
    const name = item.name;
    await this.updateCurrentCharacter(id);
    await this.pushToHistory({ id, name });
    this.$router.push({ name: "Character", params: { name } });
  }

  @Watch("currentItems")
  itemsChanged(items: Array<SwapiCharacterModel>) {
    this.isLoading = true;
    this.items = [];
    setTimeout(() => {
      this.items = [...items];
      this.isLoading = false;
    }, 300);
  }

  @Watch("page")
  pageChanged(page: number) {
    this.searchThroughCharacters({ search: this.currentSearch, page });
  }
}
</script>

<style lang="scss" scoped></style>
