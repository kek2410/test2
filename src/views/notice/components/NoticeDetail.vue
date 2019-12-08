<template>
  <v-card tile>
    <VTitleToolBar :icon="'mdi-eye'" :text="`시스템 공지사항 상세`" />
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="1" class="mt-4">등록일자:</v-col>
          <v-col cols="12" sm="6" md="2">
            <v-text-field readonly></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="1" class="mt-4">등록자:</v-col>
          <v-col cols="12" sm="6" md="2">
            <v-text-field readonly></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="1" class="mt-4">수정일자:</v-col>
          <v-col cols="12" sm="6" md="2">
            <v-text-field readonly></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="1" class="mt-4">수정자:</v-col>
          <v-col cols="12" sm="6" md="2">
            <v-text-field readonly></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="1" class="mt-4">제목:</v-col>
          <v-col cols="12" md="11">
            <v-text-field readonly v-model="getNo"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="1" class="mt-4">내용:</v-col>
          <v-col cols="12" md="11">
            <v-text-field readonly></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color class="mr-2 mt-5" @click="closeDetail">목록</v-btn>
      <v-btn color="warning" class="mr-2 mt-5" @click="showEdit">수정</v-btn>
      <v-btn color="error" class="mr-2 mt-5" @click="deleteDetail">삭제</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import VTitleToolBar from "@/components/VTitleToolBar/VTitleToolBar.vue";

@Component({
  components: { VTitleToolBar }
})
export default class NoticeDetail extends Vue {
  //프로퍼티 필요시 사용.
  @Prop() no!: any;

  get getNo() {
    return this.$route.params.no;
  }

  closeDetail() {
    this.$emit("closeDetail");
  }

  showEdit() {
    this.$emit("showEdit", this.no);
  }

  deleteDetail() {
    if (confirm("정말 삭제하시겠습니까?")) {
      this.$emit("closeDetail");
    }
  }

  created() {
    console.log("no: ", this.$route.params.no);
  }
}
</script>

<style lang="scss" scoped></style>
