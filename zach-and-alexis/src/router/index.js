import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Photos from "../views/Photos.vue";
import Registry from "../views/Registry.vue";
import Rsvp from "../views/RSVP.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/photos",
    name: "Photos",
    component: Photos
  },
  {
    path: "/registry",
    name: "Registry",
    component: Registry
  },
  {
    path: "/rsvp",
    name: "Rsvp",
    component: Rsvp
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
