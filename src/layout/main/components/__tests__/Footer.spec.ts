import { shallowMount, createLocalVue } from "@vue/test-utils";
import Footer from "../Footer.vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import i18n from "@/locale";
import VueI18n from "vue-i18n";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueI18n);
localVue.use(Vuetify);

describe("Footer.vue", (): void => {
  let store: any;
  let vuetify: any;

  beforeEach((): void => {
    vuetify = new Vuetify();

    store = new Vuex.Store({});
  });

  it("Footer.vue > test.name1", (): void => {
    const wr = shallowMount(Footer, {
      localVue,
      store,
      vuetify,
      i18n
    });
    expect(wr.html()).toMatchSnapshot();
  });

  it("Footer.vue > test.name", async (): Promise<any> => {
    const wr = shallowMount(Footer, {
      localVue,
      store,
      vuetify,
      i18n
    });

    console.log(wr);

    expect(1).toBe(1);
  });
});
