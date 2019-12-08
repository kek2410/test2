import { shallowMount, createLocalVue } from "@vue/test-utils";
import Header from "../Header.vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import i18n from "@/locale";
import VueI18n from "vue-i18n";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueI18n);
localVue.use(Vuetify);

describe("Header.vue", (): void => {
  let store: any;
  let vuetify: any;

  beforeEach((): void => {
    vuetify = new Vuetify();

    store = new Vuex.Store({});
  });

  it("Header.vue > test.name1", (): void => {
    const wr = shallowMount(Header, {
      localVue,
      store,
      vuetify,
      i18n
    });
    expect(wr.html()).toMatchSnapshot();
  });

  it("Header.vue > test.name", async (): Promise<any> => {
    const wr = shallowMount(Header, {
      localVue,
      store,
      vuetify,
      i18n
    });

    console.log(wr);

    expect(1).toBe(1);
  });
});
