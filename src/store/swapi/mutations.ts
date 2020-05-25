import Vue from "vue";
import { Mutations } from "vuex-smart-module";
import state from "./state";
import { swapiCharacterModel } from "@/types/swapiModels";

export default class AppMutations extends Mutations<state> {
  SET_CURRENT_CHARACTERS(items: Array<swapiCharacterModel>) {
    Vue.set(this.state, "currentItems", items);
  }
}
