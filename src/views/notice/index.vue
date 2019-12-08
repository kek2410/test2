<template>
  <div>
    <NoticeCondition v-if="!detailCondition && !editCondition" @searchList="searchList" />
    <NoticeDataTable
      v-if="!detailCondition && !editCondition"
      @showDetail="showDetail"
      @showEdit="showEdit"
      @deleteList="deleteList"
      :headers="headers"
      :contents="contents"
    />
    <router-view
      v-else
      @closeDetail="closeDetail"
      @showEdit="showEdit"
      @closeEdit="closeEdit"
      @saveEdit="saveEdit"
    ></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import NoticeDataTable from "./components/NoticeDataTable.vue";
import NoticeCondition from "./components/NoticeCondition.vue";
import router from "@/router";
import { isUndefinedOrNotNull } from "@/utils/validate";

const namespace = "notice";

@Component({
  components: {
    NoticeDataTable,
    NoticeCondition
  }
})
export default class Notice extends Vue {
  //프로퍼티 필요시 사용.
  @Prop() notice!: any;
  @Getter("notice") getNotice!: any;
  @Action("notice", { namespace }) actNotice!: any;

  selected = [];

  detailCondition = false;
  editCondition = false;

  headers: any = null;
  contents: any = null;

  searchList() {
    this.headers = [
      { text: "No.", value: "no", align: "center", sortable: false },
      { text: "제목", value: "title", align: "center", sortable: false },
      { text: "등록자", value: "inputUser", align: "center", sortable: false },
      { text: "등록일자", value: "inputDate", align: "center", sortable: false }
    ];

    this.contents = [
      {
        no: 1,
        title: "시스템 공지사항 테스트 제목",
        inputUser: "관리자",
        inputDate: "2019-12-06"
      }
    ];
  }

  deleteList() {
    if (confirm("체크한 내역을 삭제하시겠습니까?")) {
      return null;
    }
  }

  showDetail(val: any) {
    // console.log("val: ", val);
    console.log("val: ", val);
    router.push({ name: "NoticeDetail", params: { no: val } });
    this.detailCondition = true;
    this.editCondition = false;
  }

  showEdit(val: any) {
    let paramNo = "";
    if (isUndefinedOrNotNull(val) && val !== "") {
      paramNo = val;
    } else {
      paramNo = "new";
    }
    console.log("showEdit", paramNo);

    router.push({ name: "NoticeEdit", params: { no: paramNo } });

    this.detailCondition = false;
    this.editCondition = true;
  }

  closeDetail() {
    this.detailCondition = false;
    this.editCondition = false;
  }

  closeEdit() {
    this.editCondition = false;
    this.detailCondition = false;
  }

  saveEdit() {
    this.editCondition = false;
    this.detailCondition = false;
  }
}
</script>

<style lang="scss" scoped></style>
