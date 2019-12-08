import { shallowMount, createLocalVue } from "@vue/test-utils";
import Navigation from "../Navigation.vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import VueI18n from "vue-i18n";
import { seti18n } from "@/locale";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueI18n);
localVue.use(Vuetify);

describe("Navigation.vue", (): void => {
  let store: any;
  let vuetify: any;
  let i18n: any;

  beforeEach((): void => {
    i18n = new VueI18n(seti18n);
    vuetify = new Vuetify();
    store = new Vuex.Store({
      getters: {
        menuList: (state: any): any => state.login.menuList
      },
      modules: {
        login: {
          namespaced: true,
          state: {
            menuList: [
              {
                name: "DashBoard",
                icon: "mdi-view-dashboard",
                title: "DashBoard"
              },
              {
                name: "TestList",
                icon: "mdi-home",
                title: "TestList"
              }
            ]
          }
        }
      },
      strict: true
    });
  });

  it("Navigation.vue > test.name1", (): void => {
    const wr = shallowMount(Navigation, {
      localVue,
      store,
      vuetify,
      i18n
    });
    expect(wr.html()).toMatchSnapshot();
  });

  it("Navigation.vue > test.name", async (): Promise<any> => {
    const wr = shallowMount(Navigation, {
      localVue,
      store,
      vuetify,
      i18n
    });

    console.log(wr);

    expect(1).toBe(1);
  });
});
