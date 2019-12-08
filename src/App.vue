<template>
  <router-view />
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {}
})
export default class App extends Vue {
  created() {
    console.log("process: ", process.env.NODE_ENV);
  }
}
</script>
