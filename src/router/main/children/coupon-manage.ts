const SubRouter = (): any => import("@/components/SubRouter/SubRouter.vue");
const CouponManage = (): any =>
  import("@/views/coupon-manage/coupon-manage/index.vue");
const CouponBookManage = (): any =>
  import("@/views/coupon-manage/coupon-book-manage/index.vue");
const couponManageMember = (): any =>
  import("@/views/coupon-manage/coupon-manage-member/index.vue");

const comp = {
  sort: 100,
  hidden: false,
  path: "/Coupon",
  name: "Coupon",
  component: SubRouter,
  meta: {
    icon: "mdi-barcode-scan",
    title: "쿠폰 관리"
  },
  children: [
    {
      path: "/CouponManage",
      name: "CouponManage",
      component: CouponManage,
      meta: {
        icon: "mdi-menu-right",
        title: "쿠폰 관리"
      }
    },
    {
      path: "/CouponBookManage",
      name: "CouponBookManage",
      component: CouponBookManage,
      meta: {
        icon: "mdi-menu-right",
        title: "쿠폰북 관리"
      }
    },
    {
      path: "/couponManageMember",
      name: "couponManageMember",
      component: couponManageMember,
      meta: {
        icon: "mdi-menu-right",
        title: "회원별 쿠폰관리"
      }
    }
  ]
};

export default comp;
