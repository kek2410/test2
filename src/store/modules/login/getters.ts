import { GetterTree } from "vuex";
import { State } from "./state";
import { RootState } from "@/store";

export const getters: GetterTree<State, RootState> = {
  isLogin: (state: State): boolean => state.isLogin,
  getToken: (state: State): string => state.token,
  themeColor: (state: State): string => state.themeColor,
  getLocale: (state: State): string => state.locale
};

export default getters;
