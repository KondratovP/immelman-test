import Vue from "vue";
import { Mutations } from "vuex-smart-module";
import state from "./state";
import { SwapiCharacterModel } from "@/types/swapiModels";

export default class AppMutations extends Mutations<state> {
  SET_CURRENT_CHARACTERS(items: Array<SwapiCharacterModel>) {
    Vue.set(this.state, "currentItems", items);
  }

  SET_TOTAL_ITEMS(items: number) {
    Vue.set(this.state, "totalItems", items);
  }

  SET_CURRENT_SEARCH(search: string) {
    Vue.set(this.state, "currentSearch", search);
  }

  SET_CURRENT_PAGE(page: number) {
    Vue.set(this.state, "currentPage", page);
  }

  SET_CURRENT_CHARACTER(item: SwapiCharacterModel | null) {
    Vue.set(this.state, "currentCharacter", item);
  }
}
