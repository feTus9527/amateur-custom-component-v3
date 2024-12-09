<script setup lang="ts">
import { ref } from "vue";
import buttonProps from "./props.ts";

defineOptions({
  name: "fe-button",
});
defineProps(buttonProps);
const _ref = ref<HTMLButtonElement | null>(null);
defineExpose({
  ref: _ref,
});
</script>

<template>
  <button
    ref="_ref"
    class="fe-button"
    :class="{
      [`fe-button--${type}`]: type,
      [`fe-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled || loading,
    }"
    :disabled="disabled || loading"
    type="button"
  >
    <fe-icon icon="spinner" spin v-if="loading" />
    <fe-icon :icon="icon" v-if="icon" />
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<style scoped></style>
