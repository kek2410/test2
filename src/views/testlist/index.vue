<template>
  <div>
    <v-container class="grey lighten-5">
      <v-btn @click="searchMovie">조회 </v-btn>
      <v-row no-gutters>
        <v-card style="width:10%;" class="pa-2" outlined tile>이미지</v-card>
        <v-card style="width:10%;" class="pa-2" outlined tile>제목</v-card>
        <v-card style="width:70%;" class="pa-2" outlined tile>시놉시스</v-card>
        <v-card style="width:10%;" class="pa-2" outlined tile>평점</v-card>
      </v-row>
      <v-row
        v-for="(data, idx) in movieList"
        :key="idx"
        style="height:160px;"
        no-gutters
      >
        <v-img style="width:10%;" :src="data.small_cover_image"></v-img>
        <v-card style="width:10%;" class="pa-2" outlined tile>{{
          data.title
        }}</v-card>
        <v-card style="width:70%;" class="pa-2" outlined tile>{{
          data.synopsis
        }}</v-card>
        <v-card style="width:10%;" class="pa-2" outlined tile>{{
          data.rating
        }}</v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { openAPI } from "@/api/axios";

@Component({
  components: {},
  computed: {},
  methods: {}
})
export default class TestList extends Vue {
  // data
  movieList: any = null;

  url: string = "https://yts.lt/api/v2/list_movies.json?sort_by=rating";
  params: {} = {};

  //methods
  async searchMovie() {
    this.movieList = null;
    const result = await openAPI(this.url, this.params);
    this.movieList = result.data.movies;
  }

  mounted() {}
}
</script>
