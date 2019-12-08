const SubRouter = (): any => import("@/components/SubRouter/SubRouter.vue");
const UserPeriodConnectStats = (): any =>
  import("@/views/stats/user-stats/user-period-connect-stats/index.vue");
const UserPeriodSignStats = (): any =>
  import("@/views/stats/user-stats/user-period-sign-stats/index.vue");

const comp = {
  sort: 500,
  hidden: false,
  path: "/Stats",
  name: "Stats",
  component: SubRouter,
  meta: {
    icon: "mdi-barcode-scan",
    title: "통계"
  },
  children: [
    {
      path: "/UserStats",
      name: "UserStats",
      component: SubRouter,
      meta: {
        icon: "",
        title: "사용자 통계"
      },
      children: [
        {
          path: "/UserPeriodSignStats",
          name: "UserPeriodSignStats",
          component: UserPeriodSignStats,
          meta: {
            icon: "mdi-menu-right",
            title: "기간별 가입/탈퇴 통계"
          }
        },
        {
          path: "/UserPeriodConnectStats",
          name: "UserPeriodConnectStats",
          component: UserPeriodConnectStats,
          meta: {
            icon: "mdi-menu-right",
            title: "기간별 접속통계"
          }
        }
      ]
    }
  ]
};

export default comp;
