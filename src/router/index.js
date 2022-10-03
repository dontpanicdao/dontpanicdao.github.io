import { createRouter, createWebHistory } from "vue-router";

import Util from "../views/Util.vue";
import StarkNet from "../views/components/StarkNet.vue";

const routes = [
  {
    path: "/",
    component: Util,
  },
  {
    path: "/txStatus",
    component: StarkNet,
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
