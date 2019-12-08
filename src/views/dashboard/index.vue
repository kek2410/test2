<template>
  <div>
    <DashboardNotice :headers="headers" :items="items" />
    <DashBoardRadarChart :series="series" :chartOptions="chartOptions" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import DashboardNotice from "./components/DashboardNotice.vue";
import DashBoardRadarChart from "./components/DashBoardRadarChart.vue";

@Component({
  components: { DashboardNotice, DashBoardRadarChart }
})
export default class DashBoard extends Vue {
  headers = [
    {
      sortable: false,
      text: "공지사항",
      value: "title",
      align: "left"
    },
    {
      sortable: false,
      text: "작성일자",
      value: "idate",
      align: "center"
    }
  ];
  items = [
    {
      title: "펜타웍스 시스템 공지사항에 오신것을 환영합니다.",
      idate: "2019-12-06 09:15:30"
    },
    {
      title: "그 누구에게도 말하지말아주세요.",
      idate: "2019-12-06 09:15:30"
    },
    {
      title: "공지사항에 뭘 넣어야 할지 몰라서 아무것도 안넣었어....",
      idate: "2019-12-06 09:15:30"
    },
    {
      title: "오늘 점심은 돈까스다.",
      idate: "2019-12-06 09:15:30"
    },
    {
      title: "내일 점심도 돈까스다.",
      idate: "2019-12-06 09:15:30"
    }
  ];

  series = [
    {
      name: "Series 1",
      data: [80, 81, 19, 21, 5, 45]
    }
  ];

  chartOptions = {
    labels: [
      "정률할인",
      "정액할인",
      "정액적립",
      "정률적립",
      "포인트쿠폰",
      "금액형"
    ],
    title: {
      text: ""
    }
  };

  mounted() {}
}
</script>
