import { createRouter, createWebHistory } from "vue-router";

import Util from "@/views/Util.vue";
import Converter from "@/views/Converter.vue";
import StarkNet from "@/views/StarkNet.vue"; // TODO rename file
import EC from "@/views/EC.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Util, // TODO DO HOMEPAGE 
  },
  {
    path: "/converter",
    name: "Converter",
    component: Converter,
  },
  {
    path: "/txStatusChecker",
    name: "Status checker",
    component: StarkNet,
  },
  {
    path: "/callFunction",
    name: "Call function",
    component: StarkNet,
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
