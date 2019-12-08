const SubRouter = (): any => import("@/components/SubRouter/SubRouter.vue");
const CRMPushManage = (): any =>
  import("@/views/push-manage/crm-push-manage/index.vue");
const CouponPushList = (): any =>
  import("@/views/push-manage/coupon-push-list/index.vue");

const comp = {
  sort: 300,
  hidden: false,
  path: "/Push",
  name: "Push",
  component: SubRouter,
  meta: {
    icon: "mdi-barcode-scan",
    title: "PUSH 관리"
  },
  children: [
    {
      path: "/CRMPushManage",
      name: "CRMPushManage",
      component: CRMPushManage,
      meta: {
        icon: "mdi-menu-right",
        title: "CRM Push 관리"
      }
    },
    {
      path: "/CouponPushList",
      name: "CouponPushList",
      component: CouponPushList,
      meta: {
        icon: "mdi-menu-right",
        title: "쿠폰 PUSH 조회"
      }
    }
  ]
};

export default comp;
