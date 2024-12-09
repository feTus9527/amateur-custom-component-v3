<script setup lang="ts">
import iconProps from "./props";
import { omit } from "lodash-es";
import { computed } from "vue";

defineOptions({
  name: "fe-icon",
});
const props = defineProps(iconProps);
const fontAwesomeProps = computed(() => omit(props, ["type"]));
</script>

<template>
  <i class="fe-icon" :class="{ [`fe-icon--${type}`]: type }">
    <font-awesome-icon v-bind="fontAwesomeProps"></font-awesome-icon>
  </i>
</template>

<style scoped></style>
