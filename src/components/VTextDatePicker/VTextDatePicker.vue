<template>
  <div class="d-inline-flex" outlined tile>
    <v-text-field
      v-model="date"
      outlined
      dense
      @focus="focusEvent(date)"
      @blur="parseDate(date)"
      tabindex="1"
    ></v-text-field>
    <v-menu
      ref="menu1"
      v-model="menu1"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="290px"
    >
      <template v-slot:activator="{ on }">
        <v-btn text icon v-on="on">
          <v-icon>mdi-calendar-range</v-icon>
        </v-btn>
      </template>
      <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
    </v-menu>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class VTextDatePicker extends Vue {
  //프로퍼티 필요시 사용.
  @Prop() date!: any;

  menu1 = false;

  formatDate(date: string) {
    if (!date) return null;

    const [year, month, day] = date.split("-");
    return `${year}-${month}-${day}`;
  }
  parseDate(date: string) {
    if (!date) return null;

    let [month, day, year] = date.split("-");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }
  focusEvent(date: string) {
    console.log(date);
    return date;
  }

  created() {}
}
</script>

<style lang="scss" scoped></style>
