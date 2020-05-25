import { Getters } from "vuex-smart-module";
import state from "./state";

export default class AppGetters extends Getters<state> {
  get currentItems() {
    return this.state.currentItems;
  }
}
