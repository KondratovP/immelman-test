import { Actions } from "vuex-smart-module";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import { api } from "@/api";
import {
  swapiCharacterModel,
  swapiCharactersResponse
} from "@/types/swapiModels";

export default class AppActions extends Actions<
  state,
  getters,
  mutations,
  AppActions
> {
  async initCharacters(): Promise<swapiCharactersResponse | undefined> {
    return api.swCharacters.allCharacters().then(data => {
      const items = data ? data?.results : [];
      this.commit("SET_CURRENT_CHARACTERS", items);
      return data;
    });
  }
}
