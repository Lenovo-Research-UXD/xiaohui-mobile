import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Tool from "../views/Tool.vue";
import Device from "../views/Device.vue";
import Api from "../views/Api.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    alias: "/index",
    name: "home",
    component: Home,
  },
  {
    path: "/tool",
    name: "tool",
    component: Tool,
  },
  {
    path: "/device",
    name: "device",
    component: () => import("../views/Device.vue"),
  },
  {
    path: "/api",
    name: "api",
    component: () => import("../views/Api.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      console.log({ to });
      return {
        el: to.hash,
        behavior: "smooth",
        top: 45,
      };
    }
  },
});

// 跳转新页面时 从页面顶部显示
router.afterEach(() => {
  window.scrollTo({
    left: 0,
    top: 0,
  });
});

export default router;
