import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "radwiin",
        component: () => import("@/views/Home"),
        meta: { title: "首页" }
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
