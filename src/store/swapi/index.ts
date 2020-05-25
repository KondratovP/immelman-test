import { Module, createMapper } from "vuex-smart-module";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const swapiModule = new Module({
  state,
  getters,
  mutations,
  actions
});

export default swapiModule;

export const swapiMapper = createMapper(swapiModule);
