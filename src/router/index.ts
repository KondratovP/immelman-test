import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Main",
    component: () =>
      /* webpackChunkName: "main-view" */
      import("../views/Main/index.vue")
  },
  {
    path: "/character/:name",
    name: "Character",
    component: () =>
      /* webpackChunkName: "character-view" */
      import("../views/Character/index.vue"),
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
