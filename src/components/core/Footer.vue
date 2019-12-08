<template>
  <v-footer id="core-footer" absolute height="82">
    <v-spacer />
    <span class="font-weight-light copyright">
      &copy;
      {{ new Date().getFullYear() }}
      Pentaworks Corp.
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Footer extends Vue {}
</script>

<style>
#core-footer {
  z-index: 0;
}
</style>
