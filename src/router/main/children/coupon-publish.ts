const SubRouter = (): any => import("@/components/SubRouter/SubRouter.vue");
const CRMCouponBookPublish = (): any =>
  import("@/views/coupon-publish/crm-coupon-book-publish/index.vue");

const comp = {
  sort: 110,
  hidden: false,
  path: "/CouponPublish",
  name: "CouponPublish",
  component: SubRouter,
  meta: {
    icon: "mdi-notebook-multiple",
    title: "쿠폰북 발행관리"
  },
  children: [
    {
      path: "/CRMCouponBookPublish",
      name: "CRMCouponBookPublish",
      component: CRMCouponBookPublish,
      meta: {
        icon: "mdi-menu-right",
        title: "CRM 쿠폰북 발행 관리"
      }
    }
  ]
};

export default comp;
