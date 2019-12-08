import { Module } from "vuex";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";
import state from "./state";

const login: Module<any, any> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

export default login;
