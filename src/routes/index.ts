import { createRouter, createWebHashHistory } from "vue-router";
import IconPage from "@/pages/icon/index.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "icon",
      component: IconPage,
    },
    {
      path: "/button",
      name: "button",
      component: () => import("@/pages/button/index.vue"),
    },
    {
      path: "/card",
      name: "card",
      component: () => import("@/pages/card/index.vue"),
    },
    {
      path: "/dialog",
      name: "dialog",
      component: () => import("@/pages/dialog/index.vue"),
    },
    {
      path: "/collapse",
      name: "collapse",
      component: () => import("@/pages/collapse/index.vue"),
    },
    {
      path: "/dropdown",
      name: "dropdown",
      component: () => import("@/pages/dropdown/index.vue"),
    },
    {
      path: "/tooltip",
      name: "tooltip",
      component: () => import("@/pages/tooltip/index.vue"),
    },
    {
      path: "/pager",
      name: "pager",
      component: () => import("@/pages/pager/index.vue"),
    },
  ],
  linkActiveClass: "active",
});

export default router;
