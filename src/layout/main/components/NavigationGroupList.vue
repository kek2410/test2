<template>
  <v-list-group :value="groupValue">
    <template v-slot:activator>
      <v-list-item-icon>
        <v-icon v-text="data.meta.icon" />
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ data.meta.title }}</v-list-item-title>
      </v-list-item-content>
    </template>
    <v-list nav>
      <div v-for="(list, i) in menuList" :key="i">
        <NavigationSubGroupList v-if="list.group" :data="list" />
        <NavigationList v-else :data="list" />
      </div>
    </v-list>
  </v-list-group>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import NavigationList from "./NavigationList.vue";
import NavigationSubGroupList from "./NavigationSubGroupList.vue";

@Component({
  components: { NavigationList, NavigationSubGroupList }
})
export default class Navigation extends Vue {
  @Prop() data!: any;
  groupValue = false;
  menuList: any = null;

  created() {
    this.menuList = this.data.children;
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
