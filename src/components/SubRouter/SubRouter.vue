<template>
  <router-view :key="key" />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {}
})
export default class SubRouter extends Vue {
  get key() {
    return this.$route.name;
  }
}
</script>
