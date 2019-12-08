const Notice = (): any => import("@/views/notice/index.vue");
const NoticeDetail = (): any =>
  import("@/views/notice/components/NoticeDetail.vue");
const NoticeEdit = (): any =>
  import("@/views/notice/components/NoticeEdit.vue");

const comp = {
  sort: 20,
  hidden: false,
  path: "/Notice",
  name: "Notice",
  component: Notice,
  meta: {
    icon: "mdi-home",
    title: "시스템공지사항"
  },
  children: [
    {
      path: "/Notice/:no",
      name: "NoticeDetail",
      component: NoticeDetail
    },
    {
      path: "/Notice/edit/:no",
      name: "NoticeEdit",
      component: NoticeEdit
    }
  ]
};

export default comp;
