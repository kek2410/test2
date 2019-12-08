<template>
    <v-app id="inspire">
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card class="elevation-12">
                <v-toolbar color="dark-grey" dark flat>
                  <v-toolbar-title>{{ $t("login") }}</v-toolbar-title>
                  <v-spacer />
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      ref="login"
                      autofocus
                      v-model="email"
                      label="ID를 입력해주세요."
                      name="login"
                      prepend-icon="mdi-login"
                      type="text"
                    />
                    <v-text-field
                      ref="password"
                      v-model="password"
                      id="password"
                      label="패스워드를 입력하세요"
                      name="password"
                      prepend-icon="mdi-lock"
                      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show ? 'text' : 'password'"
                      @keyup.13="doLogIn"
                      @click:append="show = !show"
                    />
                    <v-checkbox
                      v-model="chkSave"
                      :label="`아이디 저장`"
                      @change="saveId"
                    ></v-checkbox>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer />
                  <v-btn color="primary" @click="doLogIn">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import cookie from "@/utils/cookie";
import { isUndefinedOrNotNull } from "@/utils/validate";

const namespace = "login";

@Component({
  components: {}
})
export default class Login extends Vue {
  password: string = "";
  email: string = "";
  cookieId: string = "";
  chkSave: boolean = false;
  show: boolean = false;
  @Getter("isLoginError") isLoginError!: boolean;
  @Action("actionLogin", { namespace }) actionLogin: any;

  mounted() {
    this.cookieId = cookie.get("chksaveId");

    if (isUndefinedOrNotNull(this.cookieId) && this.cookieId !== "") {
      this.email = this.cookieId;
      this.chkSave = true;
      // let theField = <HTMLInputElement>this.$refs.login;
      // theField.focus();
    } else {
      this.email = "";
      this.chkSave = false;
      // let theField = <HTMLInputElement>this.$refs.password;
      // theField.focus();
    }

    // this.$refs.search.focus();
  }

  doLogIn(): void {
    const data = {
      email: this.email,
      password: this.password
    };

    let chk = true;

    if (this.email === "") {
      alert(this.$t("inputEmail"));
      chk = false;
    } else if (this.password === "") {
      alert(this.$t("inputPassword"));
      chk = false;
    }

    if (chk) this.actionLogin(data);
  }

  saveId(val: boolean) {
    val === true && isUndefinedOrNotNull(this.email) && this.email !== ""
      ? cookie.set("chksaveId", this.email)
      : cookie.del("chksaveId");
  }

  beforeDestroy() {
    this.saveId(this.chkSave);
  }

  destroyed() {}
}
</script>
