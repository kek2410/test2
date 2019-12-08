<template>
  <v-list-group :value="groupValue">
    <template v-slot:activator>
      <v-list-item-icon>
        <v-icon v-text="data.meta.icon" />
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ data.meta.title }}</v-list-item-title>
      </v-list-item-content>
    </template>
    <v-list nav>
      <div v-for="(list, i) in data.children" :key="i">
        <NavigationList :data="list" />
      </div>
    </v-list>
  </v-list-group>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import NavigationList from "./NavigationList.vue";

@Component({
  components: { NavigationList }
})
export default class Navigation extends Vue {
  @Prop() data!: any;
  groupValue = false;

  mounted() {}
}
</script>
