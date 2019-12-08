const DashBoard = (): any => import("@/views/dashboard/index.vue");

const comp = {
  sort: 10,
  hidden: false,
  path: "/DashBoard",
  name: "DashBoard",
  component: DashBoard,
  meta: {
    icon: "mdi-view-dashboard",
    title: "DashBoard"
  }
};

export default comp;
