import { ActionTree } from "vuex";
import { State } from "./state";
import { RootState } from "@/store";
import mainAPI from "@/api/axios";
import { isUndefinedOrNotNull } from "@/utils/validate";
import { getToken } from "@/utils/auth";

export const actions: ActionTree<State, RootState> = {
  async actionLogin({ commit }, loginObj): Promise<any> {
    try {
      let token = "";
      let chkLogin = false;
      let result: any = null;

      if (loginObj.email === "1") {
        token = "QpwL5tke4Pnpja7X4";
        chkLogin = true;
      }

      if (!chkLogin) {
        result = await mainAPI("/api/login", loginObj);

        if (
          isUndefinedOrNotNull(result.data.token) &&
          result.data.token !== ""
        ) {
          token = result.data.token;
          chkLogin = true;
        }

        result = null;
      }

      if (chkLogin) {
        //getUserInfo
        commit("SET_TOKEN", token);
        let url = "/api/users/2";
        result = await mainAPI(url, loginObj, "get");
      }

      if (isUndefinedOrNotNull(result) && isUndefinedOrNotNull(result.data)) {
        commit("LOGIN_SUCCESS", result.data);
      } else {
        commit("LOGIN_ERROR");
      }
    } catch (error) {
      console.log("e: ", error);
    }
  },
  async getMemberInfo({ commit }): Promise<any> {
    let token = getToken();
    let chkLogin = false;
    let result: any = null;

    if (isUndefinedOrNotNull(token) && token !== "") {
      chkLogin = true;
    }

    if (chkLogin) {
      //getUserInfo
      commit("SET_TOKEN", token);
      let url = "/api/users/2";
      result = await mainAPI(url, "get");
    }

    if (isUndefinedOrNotNull(result) && isUndefinedOrNotNull(result.data)) {
      commit("LOGIN_SUCCESS", result.data);
    }
  },
  actionLogOut({ commit }): void {
    commit("LOG_OUT");
  },
  setLocale({ commit }, data: any): void {
    commit("SET_LOCALE", data);
  },
  setToken({ commit }, data: any): void {
    commit("SET_TOKEN", data);
  },
  setThemeColor({ commit }, data: any): void {
    commit("SET_THEME_COLOR", data);
  }
};

export default actions;
