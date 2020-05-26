import { Getters } from "vuex-smart-module";
import state from "./state";
import { SwapiCharacterModel } from '@/types/swapiModels';

export default class AppGetters extends Getters<state> {
  get currentItems() {
    return this.state.currentItems;
  }

  get total() {
    return this.state.totalItems;
  }

  get currentSearch() {
    return this.state.currentSearch;
  }

  get currentPage() {
    return this.state.currentPage;
  }

  get currentCharacter(): SwapiCharacterModel | null {
    return this.state.currentCharacter;
  }

  get history(): Array<{id: number, name: string}> {
    return this.state.history
  }
}
