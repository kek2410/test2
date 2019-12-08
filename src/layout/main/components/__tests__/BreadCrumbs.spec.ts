import { shallowMount, createLocalVue } from "@vue/test-utils";
import BreadCrumbs from "../BreadCrumbs.vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import i18n from "@/locale";
import VueI18n from "vue-i18n";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueI18n);
localVue.use(Vuetify);

describe("BreadCrumbs.vue", (): void => {
  let store: any;
  let vuetify: any;

  beforeEach((): void => {
    vuetify = new Vuetify();

    store = new Vuex.Store({});
  });

  it("BreadCrumbs.vue > test.name1", (): void => {
    const wr = shallowMount(BreadCrumbs, {
      localVue,
      store,
      vuetify,
      i18n
    });
    expect(wr.html()).toMatchSnapshot();
  });

  it("BreadCrumbs.vue > test.name", async (): Promise<any> => {
    const wr = shallowMount(BreadCrumbs, {
      localVue,
      store,
      vuetify,
      i18n
    });

    console.log(wr);

    expect(1).toBe(1);
  });
});
