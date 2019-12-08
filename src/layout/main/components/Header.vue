<template>
  <v-app-bar :color="themeColor" app dark>
    <v-row align="center">
      <v-app-bar-nav-icon @click.stop="$emit('fnDraw')" />
      <BreadCrumbs />
      <v-spacer />
      <v-btn icon router :to="{ name: 'MyPage' }">
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
      <v-btn icon @click="loginOut">
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
      <!-- <LocaleSelect /> -->
    </v-row>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { State, Action, Getter } from "vuex-class";
import BreadCrumbs from "./BreadCrumbs.vue";
import LocaleSelect from "./LocaleSelect.vue";

const namespace = "login";

@Component({
  components: {
    BreadCrumbs,
    LocaleSelect
  }
})
export default class Header extends Vue {
  @Prop() drawer!: any;
  @State(namespace) login!: any;
  @Action("actionLogOut", { namespace }) actionLogOut: any;
  @Action("setLocale", { namespace }) setLocale: any;
  @Getter("themeColor", { namespace }) themeColor!: string;
  @Getter("isLogin") isLogin!: boolean;
  @Getter("fullName") fullName!: string;

  items = [
    { text: "한국어", value: "ko" },
    { text: "English", value: "en" },
    { text: "日本語", value: "ja" }
  ];

  selectValue = "";

  loginOut(): void {
    if (confirm("로그아웃 하시겠습니까")) {
      this.actionLogOut();
    }
  }

  changeSelect(val: any): void {
    this.$vuetify.lang.current = val;
    this.setLocale(val);
  }

  created() {}

  mounted() {
    // fetching data as soon as the component's been mounted
    this.selectValue = this.login.locale;
  }
}
</script>
