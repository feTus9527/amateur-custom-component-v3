<script setup lang="ts">
import { ref } from "vue";

const visible = ref(false);
const visible2 = ref(false);
const visible3 = ref(false);
</script>

<template>
  <h1 class="row-title">General Usage</h1>
  <div class="row">
    <fe-button type="primary" @click="visible = true">Dialog 1</fe-button>
    <fe-button type="info" @click="visible2 = true">Dialog 2</fe-button>
    <fe-button type="warning" @click="visible3 = true">Dialog 3</fe-button>
  </div>
  <fe-dialog v-model:visible="visible" @close="visible = false">
    This is a basic dialog.
  </fe-dialog>
  <fe-dialog
    v-model:visible="visible2"
    @close="visible2 = false"
    title="This is a header"
    width="30vw"
    top="40vh"
  >
    This is a basic dialog.
  </fe-dialog>
  <fe-dialog v-model:visible="visible3" @close="visible3 = false">
    This is a basic dialog.
    <template #footer>
      <fe-button @click="visible3 = false">Cancel</fe-button>
      <fe-button type="primary" @click="visible3 = false">Confirm</fe-button>
    </template>
  </fe-dialog>
</template>

<style scoped></style>
