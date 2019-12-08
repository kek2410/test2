<template>
  <v-card md12 lg12 outlined tile class="mt-5" elevation="1">
    <VTitleToolBar :text="'쿠폰 유형별 사용패턴'" />
    <apexchart type="radar" height="350" :options="chartOptions" :series="series" />
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import VTitleToolBar from "@/components/VTitleToolBar/VTitleToolBar.vue";

@Component({
  components: { VTitleToolBar }
})
export default class DashboardNotice extends Vue {
  @Prop() series!: any;
  @Prop() chartOptions!: any;

  mounted() {}
}
</script>
