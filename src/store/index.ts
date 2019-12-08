import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { ActionTree } from "vuex";

Vue.use(Vuex);

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context("./modules", true, /\index.ts$/);

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const getModules = modulesFiles
  .keys()
  .reduce((modules: any, modulePath: any): any => {
    // set './app.js' => 'app'
    // const moduleName: any = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
    let moduleName: any = modulePath;
    moduleName = moduleName.replace(/^\.\/(.*)\.\w+$/, "$1");
    moduleName = moduleName.replace("/index", "");
    const value: any = modulesFiles(modulePath);
    modules[moduleName] = value.default;
    return modules;
  }, {});

export interface RootState {
  version: string;
  cachedViews: string;
  breadCrumbs: any;
  loading: boolean;
}

const state = {
  version: "1.0.0",
  cachedViews: "",
  breadCrumbs: null,
  loading: false
};

const actions: ActionTree<any, any> = {
  loading: ({ commit }, payload): any => commit("LOADING", payload)
};
const mutations = {
  LOADING: (state: any, payload: any): any => (state.loading = payload)
};

const getters = {
  // token: (state: any): any => state.login.token,
  // avatar: (state: any): any => state.login.avatar,
  // name: (state: any): any => state.login.name,
  loading: (state: any): any => state.loading,
  menuList: (state: any): any => state.login.menuList,
  fullName: (state: any): string =>
    state.login.userInfo.first_name + state.login.userInfo.last_name,
  isLogin: (state: any): any => state.login.isLogin,
  isLoginError: (state: any): any => state.login.isLoginError,
  getLocale: (state: any): any => state.login.locale
  // permission_routes: (state: any): any => state.permission.routes,
  // errorLogs: (state: any): any => state.errorLog.logs
};

const store: StoreOptions<RootState> = {
  state,
  mutations,
  actions,
  getters,
  modules: getModules,
  strict: true
};

export default new Vuex.Store(store);
