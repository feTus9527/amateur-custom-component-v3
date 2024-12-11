<script setup lang="ts">
import { ref } from "vue";

const currentPage1 = ref(1);
const currentPage2 = ref(1);
const currentPage3 = ref(1);
const currentPage4 = ref(1);
const currentPage5 = ref(1);
const currentPage6 = ref(1);
const currentPage7 = ref(1);
const currentPage8 = ref(1);
</script>

<template>
  <h1 class="row-title">General Usage</h1>
  <div class="row">
    <fe-pager
      :total="20"
      :current-page="currentPage1"
      @page-change="(page: number) => (currentPage1 = page)"
    />
  </div>
  <h1 class="row-title">Show All Page</h1>
  <div class="row">
    <fe-pager
      :total="10"
      :current-page="currentPage2"
      @page-change="(page: number) => (currentPage2 = page)"
    />
  </div>
  <h1 class="row-title">Adjustable Max Pager Count</h1>
  <div class="row">
    <fe-pager
      :total="12"
      :pager-count="15"
      :current-page="currentPage3"
      @page-change="(page: number) => (currentPage3 = page)"
    />
  </div>
  <h1 class="row-title">Color</h1>
  <div class="row">
    <fe-pager
      :total="20"
      type="warning"
      :current-page="currentPage4"
      @page-change="(page: number) => (currentPage4 = page)"
    />
  </div>
  <div class="row">
    <fe-pager
      :total="20"
      type="danger"
      :current-page="currentPage5"
      @page-change="(page: number) => (currentPage5 = page)"
    />
  </div>
  <h1 class="row-title">Size</h1>
  <div class="row">
    <fe-pager
      :total="20"
      :current-page="currentPage6"
      size="small"
      @page-change="(page: number) => (currentPage6 = page)"
    />
  </div>
  <div class="row">
    <fe-pager
      :total="20"
      :current-page="currentPage7"
      @page-change="(page: number) => (currentPage7 = page)"
    />
  </div>
  <div class="row">
    <fe-pager
      :total="20"
      :current-page="currentPage8"
      size="large"
      @page-change="(page: number) => (currentPage8 = page)"
    />
  </div>
</template>

<style scoped></style>
