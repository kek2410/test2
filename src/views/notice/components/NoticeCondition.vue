<template>
  <v-card outlined tile elevation="1">
    <VTitleToolBar :icon="'mdi-magnify'" :text="'조회 조건'" />
    <v-card class="d-flex pa-2" tile>
      <!-- <div class="d-inline-flex pa-2"> -->
      <div>
        <v-sheet class="ma-2">등록일자</v-sheet>
        <VTextDatePicker :date="dateFrom" style="width:140px" />
        <VTextDatePicker :date="dateto" style="width:140px" />
      </div>
    </v-card>

    <v-spacer />
    <v-card class="d-flex pa-2" tile>
      <!-- <div class="d-inline-flex pa-2 justify-end float-right" outlined tile> -->
      <v-btn color="primary" @click="searchList">조회</v-btn>
      <!-- </div> -->
    </v-card>
  </v-card>
</template>


<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import VTitleToolBar from "@/components/VTitleToolBar/VTitleToolBar.vue";
import VTextDatePicker from "@/components/VTextDatePicker/VTextDatePicker.vue";

@Component({
  components: {
    VTitleToolBar,
    VTextDatePicker
  }
})
export default class NoticeDataTable extends Vue {
  //프로퍼티 필요시 사용.
  @Prop() notice!: any;

  dateFrom = new Date().toISOString().substr(0, 10);
  dateto = "";

  datex = new Date().toISOString().substr(0, 10);

  selected = [];

  headers = [
    { text: "No.", value: "no", align: "center", sortable: false },
    { text: "제목", value: "title", align: "center", sortable: false },
    { text: "등록자", value: "inputUser", align: "center", sortable: false },
    { text: "등록일자", value: "inputDate", align: "center", sortable: false }
  ];

  desserts = [
    {
      no: 1,
      title: "시스템 공지사항 테스트 제목",
      inputUser: "관리자",
      inputDate: "2019-12-06"
    }
  ];

  searchList() {
    this.$emit("searchList");
  }
}
</script>

<style lang="scss" scoped></style>
