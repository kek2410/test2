export declare interface State {
  userInfo: any;
  menuList?: any;
  isLogin: boolean;
  isLoginError: boolean;
  token: string;
  locale: string;
  themeColor: string;
}

const list = [
  {
    name: "DashBoard",
    title: "DashBoard"
  },
  {
    name: "TestList",
    title: "TestList"
  }
];

export const state: State = {
  userInfo: null,
  menuList: list,
  isLogin: false,
  isLoginError: false,
  token: "",
  locale: "ko",
  themeColor: "dark-grey"
};

export default state;
