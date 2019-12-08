const SubRouter = (): any => import("@/components/SubRouter/SubRouter.vue");
const Auth = (): any => import("@/views/system/auth/index.vue");

const comp = {
  sort: 400,
  hidden: false,
  path: "/System",
  name: "System",
  component: SubRouter,
  meta: {
    icon: "mdi-barcode-scan",
    title: "시스템관리"
  },
  children: [
    {
      path: "/Auth",
      name: "Auth",
      component: Auth,
      meta: {
        icon: "mdi-menu-right",
        title: "권한관리"
      }
    }
  ]
};

export default comp;
