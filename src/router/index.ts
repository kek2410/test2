import Vue from "vue";
import VueRouter, { RouteConfig, Route } from "vue-router";
import store from "@/store";
import MainLayout from "@/layout/main/Main.vue";
import children from "./main";

Vue.use(VueRouter);

const LoginPage = (): any => import("@/views/login/index.vue");

const loginRoute: RouteConfig = {
  path: "/login",
  name: "login",
  meta: {
    icon: "",
    title: ""
  },
  component: LoginPage
};

const mainRoute: RouteConfig = {
  path: "/",
  name: "main",
  meta: {
    icon: "",
    title: ""
  },
  component: MainLayout,
  children
};

const exceptRoute: RouteConfig = {
  path: "/*",
  redirect: { name: "main" }
};

const routes: RouteConfig[] = [loginRoute, mainRoute, exceptRoute];

const router: any = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(function(to: Route, from: Route, next: any): void {
  const isAuthed = store.getters["login/isLogin"];

  if (to.name === "login" && isAuthed) {
    next({ name: "main" });
  } else if (to.name !== "login" && !isAuthed) {
    next({ name: "login" });
  } else {
    next();
  }
});

export default router;
