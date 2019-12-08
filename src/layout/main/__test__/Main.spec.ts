import { shallowMount, createLocalVue } from "@vue/test-utils";
import Main from "../Main.vue";
import Vuex from "vuex";
import Vuetify from "vuetify";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Vuetify);

describe("Main.vue", (): void => {
  let store: any;
  let vuetify: any;

  beforeEach((): void => {
    vuetify = new Vuetify();
    store = new Vuex.Store({
      state: {
        loading: Boolean
      },
      mutations: {
        LOADING: (state: any, payload: boolean): any =>
          (state.loading = payload)
      },
      getters: {
        loading: (state: any): any => state.loading
      }
    });
  });

  it("Main.vue > toMatchSnapshot", (): void => {
    const wr = shallowMount(Main, {
      localVue,
      store,
      vuetify
    });
    expect(wr.html()).toMatchSnapshot();
  });

  it("Main.vue > hide and show", async (): Promise<any> => {
    const wr = shallowMount(Main, {
      localVue,
      store,
      vuetify
    });

    const findOne = wr.find("v-Main");

    expect(findOne.isVisible()).toBe(false);

    store.commit("LOADING", true);

    expect(findOne.isVisible()).toBe(true);
  });
});
