<template>
  <div>
    <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Breadcrumbs extends Vue {
  get items() {
    let matched = this.$route.matched;
    let result = [];

    for (const key in matched) {
      if (matched.hasOwnProperty(key)) {
        const pathName = matched[key].meta.title || matched[key].name;
        const path = matched[key].path;
        if (path !== "") {
          let disabled = true;
          if (key === (matched.length - 1).toString()) disabled = false;
          result.push({ text: pathName, disabled });
        }
      }
    }
    return result;
  }

  created() {}
}
</script>
