import { Module } from "vuex-smart-module";
import swapiModule from "@/store/swapi";

export default new Module({
  modules: {
    swapi: swapiModule
  }
});
