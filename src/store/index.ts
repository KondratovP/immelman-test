import Vue from "vue";
import * as Vuex from "vuex";
import { createStore } from "vuex-smart-module";
import rootState from "./root";
import VuexPersist from "vuex-persist";

const vuexPersist = new VuexPersist({
  key: "swapi-options",
  storage: window.localStorage
});

Vue.use(Vuex);

const appStore = createStore(rootState, {
  plugins: [vuexPersist.plugin]
});

export default appStore;
