import Vue from "vue";
import VueRouter from "vue-router";
import BaseComponent from "../views/base/Base.vue";
import Home from "../views/Home.vue";
import VuexPage from "../views/Vuex/VuexPage";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/base",
    name: "Base",
    component: BaseComponent,
  },
  {
    path: "/vuex-page",
    name: "VuexPage",
    component: VuexPage,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
