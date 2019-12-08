<template>
  <v-navigation-drawer v-model="drawer" app dark>
    <v-subheader>{{ fullName }}(12345)</v-subheader>
    <v-divider />
    <v-card class="mx-auto" max-width="300" tile>
      <v-list v-model="item" dense nav>
        <div v-for="(data, i) in menuList" :key="i">
          <NavigationGroupList v-if="data.group" :data="data" />
          <NavigationList v-else :data="data" />
        </div>
      </v-list>
    </v-card>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import mainRoute from "@/router/main";
import NavigationList from "./NavigationList.vue";
import NavigationGroupList from "./NavigationGroupList.vue";
import { Getter } from "vuex-class";

@Component({
  components: {
    NavigationList,
    NavigationGroupList
  }
})
export default class Navigation extends Vue {
  @Prop() data!: any;
  @Prop() drawer!: any;
  @Getter("fullName") fullName!: string;
  mini = true;
  groupValue = false;
  item = 0;

  menuList: any = null;

  created() {
    this.menuList = mainRoute;
    for (const key in this.menuList) {
      if (this.menuList.hasOwnProperty(key)) {
        const obj = this.menuList[key];
        if (obj.hasOwnProperty("hidden") && obj.hidden) {
          this.menuList.splice(key, 1);
        } else {
          if (obj.hasOwnProperty("children")) {
            this.menuList[key].group = true;
          } else {
            this.menuList[key].group = false;
          }
        }
      }
    }

    this.menuList.sort(function(a: any, b: any) {
      return a.sort < b.sort ? -1 : a.sort > b.sort ? 1 : 0;
    });
  }

  mounted() {}
}
</script>
