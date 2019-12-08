<template>
  <v-list-item router :to="data.name" exact link>
    <v-list-item-icon>
      <v-icon v-text="data.meta.icon" />
    </v-list-item-icon>
    <v-list-item-title v-text="data.meta.title"></v-list-item-title>
  </v-list-item>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component({})
export default class Navigation extends Vue {
  @Prop() data!: any;

  mounted() {}
}
</script>
