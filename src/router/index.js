import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Converter from "@/views/Converter.vue";
import EC from "@/views/EC.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/converter",
    name: "Converter",
    component: Converter,
  },
  {
    path: "/signature",
    name: "Elliptic curve",
    component: EC,
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
