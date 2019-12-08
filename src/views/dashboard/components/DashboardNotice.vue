<template>
  <div>
    <v-card md12 lg12 outlined tile elevation="1">
      <VTitleToolBar :text="'시스템 공지사항'" />
      <v-data-table dense :headers="headers" :items="items" hide-default-footer>
        <template slot="headerCell" slot-scope="{ header }">
          <span class="font-weight-bold text-warning text--darken-3" v-text="header.text" />
        </template>
        <template slot="items" slot-scope="{ index, item }">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <!-- <td class="text-xs-right">{{ item.salary }}</td>
          <td class="text-xs-right">{{ item.country }}</td>
          <td class="text-xs-right">{{ item.city }}</td>-->
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import VTitleToolBar from "@/components/VTitleToolBar/VTitleToolBar.vue";

@Component({
  components: { VTitleToolBar }
})
export default class DashboardNotice extends Vue {
  @Prop() headers!: any;
  @Prop() items!: any;

  mounted() {}
}
</script>
