<script setup lang="ts"></script>

<template>
  <div class="row-title">General Usage</div>
  <div class="row">
    <fe-card
      img="/card-img-3.png"
      summary="Dynamic web programming language powering browser experiences."
    ></fe-card>
  </div>
  <div class="row-title">Footer Slot</div>
  <div class="row">
    <fe-card
      img="/card-img-2.png"
      summary="Object-oriented language with cross-platform compatibility."
    >
      <template #footer>
        <div class="footer">
          <div class="level">Medium 999+ enrolled</div>
          <div class="price">$69.99</div>
        </div>
      </template>
    </fe-card>
  </div>
  <div class="row-title">Custom Width and Image Height</div>
  <div class="row">
    <fe-card img="/card-img-1.png" width="488" img-height="200">
      <div>
        Go (Golang) is a statically-typed, compiled programming language
        developed by Google.
      </div>
      <template #footer>
        <div class="footer">
          <div class="level">4 steps 10 courses</div>
          <div class="level">93672 stars</div>
        </div>
      </template>
    </fe-card>
  </div>
</template>

<style scoped>
.footer {
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}

.level {
  color: #9199a1;
  margin-bottom: 8px;
}

.price {
  color: #f01414;
}
</style>
