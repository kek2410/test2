import { State } from "./state";
import { MutationTree } from "vuex";
import router from "@/router";
import i18n from "@/locale";
import { setToken, removeToken } from "@/utils/auth";

export const mutations: MutationTree<State> = {
  LOGIN_SUCCESS: (state: State, payload: any): any => {
    state.isLogin = true;
    state.isLoginError = false;
    state.userInfo = payload;

    router.push({ name: "main" });
  },
  LOGIN_ERROR: (state: State): any => {
    state.isLogin = false;
    state.isLoginError = true;
    state.userInfo = null;
    state.token = "";
    removeToken();
    setToken;
  },
  // 로그아웃
  LOG_OUT: (state: State): any => {
    state.isLogin = false;
    state.isLoginError = false;
    state.userInfo = null;
    state.token = "";
    removeToken();

    router.push({ name: "login" });
  },
  SET_TOKEN: (state: State, payload: string): any => {
    setToken(payload);
    state.token = payload;
  },
  SET_THEME_COLOR(state: any, payload: any): void {
    state.themeColor = payload;
  },
  SET_LOCALE(state: any, payload: any): void {
    state.locale = payload;
    i18n.locale = payload;
  }
};

export default mutations;
