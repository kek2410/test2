const MyPage = (): any => import("@/views/mypage/index.vue");

const comp = {
  sort: 999,
  hidden: true,
  path: "/MyPage",
  name: "MyPage",
  component: MyPage,
  meta: {
    icon: "mdi-home",
    title: "MyPage"
  }
};

export default comp;
