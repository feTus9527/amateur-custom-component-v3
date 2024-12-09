<script setup lang="ts">
import cardProps from "./props.ts";

defineOptions({ name: "fe-card" });
defineProps(cardProps);
</script>

<template>
  <div class="fe-card" :style="width ? { width: width + 'px' } : {}">
    <div
      class="fe-card-img"
      :style="imgHeight ? { height: imgHeight + 'px' } : {}"
    >
      <img :src="img" alt="card-img" />
    </div>
    <div class="fe-card-summary" v-if="summary">
      {{ summary }}
    </div>
    <div class="fe-card-summary" v-else>
      <slot />
    </div>
    <div class="fe-card-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<style scoped></style>
