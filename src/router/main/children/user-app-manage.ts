const SubRouter = (): any => import("@/components/SubRouter/SubRouter.vue");
const AppNotice = (): any =>
  import("@/views/user-app-manage/app-notice/index.vue");
const AppMenuManage = (): any =>
  import("@/views/user-app-manage/app-menu-manage/index.vue");

const comp = {
  sort: 200,
  hidden: false,
  path: "/AppManage",
  name: "AppManage",
  component: SubRouter,
  meta: {
    icon: "mdi-barcode-scan",
    title: "사용자APP관리"
  },
  children: [
    {
      path: "/AppNotice",
      name: "AppNotice",
      component: AppNotice,
      meta: {
        icon: "mdi-menu-right",
        title: "공지사항"
      }
    },
    {
      path: "/AppMenuManage",
      name: "AppMenuManage",
      component: AppMenuManage,
      meta: {
        icon: "mdi-menu-right",
        title: "메뉴 관리"
      }
    }
  ]
};

export default comp;
