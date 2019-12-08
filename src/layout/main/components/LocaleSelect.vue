<template>
  <div>
    <v-select
      class="pa-0"
      :items="items"
      v-model="selectValue"
      single-line
      auto
      hide-details
      @change="changeSelect"
    >
      <template #header="slotProps">
        <v-flag-icon :iso="selectValue" :size="'2'"></v-flag-icon>
        <span class="ml-3">
          {{ selectValue }}
        </span>
      </template>
    </v-select>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";

const namespace = "login";

@Component({})
export default class LocaleSelect extends Vue {
  @Prop() locale!: string;
  @Getter("getLocale", { namespace }) getLocale: any;
  @Action("setLocale", { namespace }) setLocale: any;

  items = [
    { text: "한국어", value: "ko" },
    { text: "English", value: "en" },
    { text: "日本語", value: "ja" }
  ];

  selectValue = "";
  flag = "";

  changeSelect(val: any): void {
    console.log(val);
    // this.setLocale(val);
  }

  created() {}

  mounted() {
    // fetching data as soon as the component's been mounted
    this.selectValue = this.getLocale;
    // this.items[this.items.findIndex(x => x.value === this.selectValue)].text;
  }
}
</script>
