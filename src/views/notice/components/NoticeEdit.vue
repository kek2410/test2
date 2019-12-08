<template>
  <v-card tile>
    <VTitleToolBar :icon="'mdi-eye'" :text="`시스템 공지사항 상세`" />
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="1" class="mt-4">제목:</v-col>
          <v-col cols="12" md="11">
            <v-text-field v-model="title"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="1" class="mt-4">내용:</v-col>
          <v-col cols="12" md="11">
            <v-text-field v-model="content"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color class="mr-2 mt-5" @click="closeEdit">취소</v-btn>
      <v-btn color="primary" class="mr-2 mt-5" @click="saveEdit">저장</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import VTitleToolBar from "@/components/VTitleToolBar/VTitleToolBar.vue";

@Component({
  components: { VTitleToolBar }
})
export default class NoticeEdit extends Vue {
  //프로퍼티 필요시 사용.
  @Prop() btitle!: any;
  @Prop() bcontent!: any;

  title = "";
  content = "";

  saveEdit() {
    if (confirm("저장하시겠습니까?")) this.$emit("saveEdit");
  }

  closeEdit() {
    if (confirm("취소하시겠습니까?")) this.$emit("closeEdit");
  }

  created() {}
}
</script>

<style lang="scss" scoped></style>
