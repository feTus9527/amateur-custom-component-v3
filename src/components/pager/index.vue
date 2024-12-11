<script setup lang="ts">
import pagerProps from "./props.ts";
import { computed } from "vue";

defineOptions({
  name: "fe-pager",
});

const props = defineProps(pagerProps);

const pager = computed(() => {
  const renderPage = [];
  if (props.total <= props.pagerCount) {
    for (let i = 1; i <= props.total; i++) {
      renderPage.push(i);
    }
  } else {
    if (props.currentPage <= 5) {
      for (let i = 1; i <= 5; i++) {
        renderPage.push(i);
      }
    } else if (props.currentPage >= props.total - 4) {
      for (let i = props.total - 4; i <= props.total; i++) {
        renderPage.push(i);
      }
    } else {
      for (let i = props.currentPage - 2; i <= props.currentPage + 2; i++) {
        renderPage.push(i);
      }
    }
  }

  return renderPage;
});

const emit = defineEmits(["page-change"]);

const toFirstPage = () => {
  emit("page-change", 1);
};
const toLastPage = () => {
  emit("page-change", props.total);
};

const handlePrevClick = () => {
  if (props.currentPage === 1) return;
  emit("page-change", props.currentPage - 1);
};

const handleNextClick = () => {
  if (props.currentPage === props.total) return;
  emit("page-change", props.currentPage + 1);
};

const handlePageClick = (page: number) => {
  emit("page-change", page);
};
</script>

<template>
  <div
    class="fe-pager"
    :class="{
      [`fe-pager--${type}`]: type,
      [`fe-pager--${size}`]: size,
    }"
  >
    <a :class="currentPage === 1 ? 'disabled' : ''" @click.prevent="toFirstPage"
      >Home</a
    >
    <a
      :class="currentPage === 1 ? 'disabled' : ''"
      :disabled="currentPage === 1"
      @click.prevent="handlePrevClick"
    >
      <fe-icon icon="angles-left" />
    </a>
    <a
      v-if="total > pagerCount && currentPage > 5"
      @click.prevent="handlePageClick(1)"
      >1</a
    >
    <a v-if="total > pagerCount && currentPage > 5">
      <fe-icon icon="ellipsis" size="sm" />
    </a>
    <a
      v-for="page in pager"
      :key="page"
      :class="page === currentPage ? 'active' : ''"
      @click.prevent="handlePageClick(page)"
      >{{ page }}</a
    >
    <a v-if="total > pagerCount && currentPage < total - 4">
      <fe-icon icon="ellipsis" size="sm" />
    </a>
    <a
      v-if="total > pagerCount && currentPage < total - 4"
      @click.prevent="handlePageClick(total)"
    >
      {{ total }}
    </a>
    <a
      :class="currentPage === total ? 'disabled' : ''"
      @click.prevent="handleNextClick"
      :disabled="currentPage === total"
    >
      <fe-icon icon="angles-right" />
    </a>
    <a
      :class="currentPage === total ? 'disabled' : ''"
      @click.prevent="toLastPage"
      >End</a
    >
  </div>
</template>

<style scoped></style>
