<template>
  <h1>{{ inputText }}</h1>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Example extends Vue {
  inputText: string = "Hello World!";
}
</script>

<style lang="scss" scoped></style>
