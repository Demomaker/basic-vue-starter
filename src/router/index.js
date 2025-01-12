import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/components/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  }
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
