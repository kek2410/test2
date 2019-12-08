import { shallowMount, createLocalVue } from "@vue/test-utils";
import Example from "../Example.vue";
import Vuetify from "vuetify";

const localVue = createLocalVue();

describe("Example.vue", (): void => {
  let vuetify: any;
  let wr: any;

  beforeEach((): void => {
    vuetify = new Vuetify();
    wr = shallowMount(Example, {
      localVue,
      vuetify
    });
  });

  it("Example.vue > toMatchSnapshot", (): void => {
    expect(wr.html()).toMatchSnapshot();
  });

  it("Example.vue > test1", (): void => {
    const h1 = wr.find("h1");

    expect(h1.text()).toBe("Hello World!");
  });
});
