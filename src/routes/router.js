import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Test from "../components/Test.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    { path: "/test", component: Test },
  ],
});
