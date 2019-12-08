const SubRouter = (): any => import("@/components/SubRouter/SubRouter.vue");
const BranchCRMPushManage = (): any =>
  import("@/views/branch-push-manage/branch-crm-push-manage/index.vue");
const BranchEventList = (): any =>
  import("@/views/branch-push-manage/branch-event-manage/index.vue");

const comp = {
  sort: 350,
  hidden: false,
  path: "/BranchPush",
  name: "BranchPush",
  component: SubRouter,
  meta: {
    icon: "mdi-barcode-scan",
    title: "지점별 PUSH 관리"
  },
  children: [
    {
      path: "/BranchCRMPushManage",
      name: "BranchCRMPushManage",
      component: BranchCRMPushManage,
      meta: {
        icon: "mdi-menu-right",
        title: "CRM Push 관리"
      }
    },
    {
      path: "/BranchEventList",
      name: "BranchEventList",
      component: BranchEventList,
      meta: {
        icon: "mdi-menu-right",
        title: "지점별 혜택 및 공지 관리"
      }
    }
  ]
};

export default comp;
