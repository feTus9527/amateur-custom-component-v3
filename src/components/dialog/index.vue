<script setup lang="ts">
import dialogProps from "./props.ts";

defineOptions({
  name: "fe-dialog",
});

defineProps(dialogProps);

const emit = defineEmits(["close"]);

const handleClick = () => {
  emit("close");
};
</script>

<template>
  <transition name="dialog-fade">
    <div v-show="visible" class="fe-dialog_wrapper">
      <div class="fe-dialog" :style="{ width, marginTop: top }">
        <div class="fe-dialog_header">
          <slot name="title">
            <span class="fe-dialog_title">{{ title }}</span>
          </slot>
          <button class="fe-dialog_header-btn" @click="handleClick">
            <fe-icon icon="xmark" />
          </button>
        </div>
        <div class="fe-dialog_body">
          <slot />
        </div>
        <div class="fe-dialog_footer" v-if="$slots.footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped></style>
