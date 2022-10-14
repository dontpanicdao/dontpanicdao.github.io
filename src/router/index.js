import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Converter from "@/views/Converter.vue";
import L1L2 from "@/views/L1L2.vue";
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
    path: "/l1l2",
    name: "L1L2",
    component: L1L2,
  },
  {
    path: "/signature",
    name: "Elliptic curve",
    component: EC,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
