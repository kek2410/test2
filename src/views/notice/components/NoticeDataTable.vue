<template>
  <v-card outlined tile class="mt-5" elevation="1">
    <VTitleToolBar :icon="'mdi-magnify'" :text="'시스템 공지사항 목록'" />
    <v-data-table
      :headers="headers"
      :items="contents"
      :items-per-page="itemsPerPage"
      item-key="name"
      show-select
      dense
      hide-default-footer
      class="elevation-1"
      @page-count="pageCount = $event"
      @click:row="showDetail"
    >
      <template v-slot:item.title="{ item }">
        <v-btn text color="primary">{{ item.title }}</v-btn>
      </template>
    </v-data-table>
    <v-card class="d-flex text-center" tile>
      <v-pagination v-model="page" :length="pageCount" total-visible="6" dense></v-pagination>
      <v-select
        width="100px"
        class="pt-5 mr-2"
        :items="selected"
        dense
        :value="itemsPerPage"
        type="number"
        outlined
      ></v-select>
      <v-spacer></v-spacer>
      <v-btn color="error" class="mr-2 mt-5" @click="deleteList">삭제</v-btn>
      <v-btn color="primary" class="mr-2 mt-5" @click="showEdit">등록</v-btn>
    </v-card>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import VTitleToolBar from "@/components/VTitleToolBar/VTitleToolBar.vue";
// import router from "@/router";

@Component({
  components: {
    VTitleToolBar
  }
})
export default class NoticeDataTable extends Vue {
  //프로퍼티 필요시 사용.
  @Prop() notice!: any;
  // @Prop() headers!: any;
  // @Prop() contents!: any;

  headers = [
    { text: "No.", value: "no", align: "center", sortable: false },
    { text: "제목", value: "title", align: "center", sortable: false },
    { text: "등록자", value: "inputUser", align: "center", sortable: false },
    { text: "등록일자", value: "inputDate", align: "center", sortable: false }
  ];

  contents = [
    {
      no: 1,
      title: "시스템 공지사항 테스트 제목",
      inputUser: "관리자",
      inputDate: "2019-12-06"
    }
  ];

  selected = [5, 10, 15];

  page = 1;
  pageCount = 0;
  itemsPerPage = 10;

  deleteList() {
    this.$emit("deleteList");
  }

  showDetail(e: any) {
    this.$emit("showDetail", e.no);
    // console.log("showDetail: ", e.no);
    // router.push({ name: "Notice", params: { no: 123 } });
  }

  showEdit() {
    this.$emit("showEdit");
    // console.log("showDetail: ", e.no);
    // router.push({ name: "Notice", params: { no: 123 } });
  }

  updated() {}
}
</script>

<style lang="scss" scoped></style>
