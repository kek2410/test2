import { shallowMount, createLocalVue } from "@vue/test-utils";
import Progress from "../Progress.vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import state from "@/store/modules/login/state";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Vuetify);

describe("Progress.vue", (): void => {
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

  it("Progress.vue > toMatchSnapshot", (): void => {
    const wr = shallowMount(Progress, {
      localVue,
      store,
      vuetify
    });
    expect(wr.html()).toMatchSnapshot();
  });

  it("Progress.vue > hide and show", async (): Promise<any> => {
    const wr = shallowMount(Progress, {
      localVue,
      store,
      vuetify
    });

    const findOne = wr.find("v-progress");

    expect(findOne.isVisible()).toBe(false);

    store.commit("LOADING", true);

    expect(findOne.isVisible()).toBe(true);
  });
});
