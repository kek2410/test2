<template>
  <div style="min-height: 4px;">
    <v-progress-linear
      color="blue"
      :indeterminate="true"
      v-if="loading"
    ></v-progress-linear>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Getter } from "vuex-class";

@Component({})
export default class Progress extends Vue {
  @Getter("loading") loading!: boolean;

  mounted() {
    // this.startBuffer();
  }
}
</script>
