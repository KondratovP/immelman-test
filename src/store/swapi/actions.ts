import { Actions } from "vuex-smart-module";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import { api } from "@/api";
import { SwapiCharactersResponse } from "@/types/swapiModels";

export default class AppActions extends Actions<state, getters, mutations, AppActions> {
  async initCharacters(): Promise<SwapiCharactersResponse | undefined> {
    return api.swCharacters.allCharacters().then(data => {
      const items = data ? data.results : [];
      const total = data ? data.count : 0;
      this.commit("SET_CURRENT_CHARACTERS", items);
      this.commit("SET_TOTAL_ITEMS", total);
      return data;
    });
  }

  async searchThroughCharacters({search= "", page = 1}): Promise<SwapiCharactersResponse | undefined> {
    this.commit("SET_CURRENT_SEARCH", search);
    this.commit("SET_CURRENT_PAGE", page);
    return api.swCharacters.search(search, page).then(data => {
      const items = data ? data.results : [];
      const total = data ? data.count : 0;
      this.commit("SET_CURRENT_CHARACTERS", items);
      this.commit("SET_TOTAL_ITEMS", total);
      return data;
    })
  }

  async updateCurrentCharacter(id: number): Promise<any> {
    return api.swCharacters.characterById(id).then(data => {
      if (data) {
        this.commit('SET_CURRENT_CHARACTER', data);
      }
      return data
    })
  }

  async removeCurrentCharacter(): Promise<any> {
    return this.commit('SET_CURRENT_CHARACTER',null);
  }
}
