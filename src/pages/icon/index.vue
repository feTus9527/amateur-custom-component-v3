<script setup lang="ts"></script>

<template>
  <h1 class="row-title">General Usage</h1>
  <div class="row">
    <fe-icon icon="user-secret"></fe-icon>
    <fe-icon icon="bars"></fe-icon>
    <fe-icon icon="shield-halved"></fe-icon>
    <fe-icon icon="file"></fe-icon>
    <fe-icon icon="filter"></fe-icon>
    <fe-icon icon="barcode"></fe-icon>
    <fe-icon icon="folder"></fe-icon>
    <fe-icon icon="folder-open"></fe-icon>
  </div>
  <h1 class="row-title">Size</h1>
  <div class="row">
    <fe-icon icon="user-secret" size="2xs" />
    <fe-icon icon="bars" size="xs" />
    <fe-icon icon="shield-halved" size="sm" />
    <fe-icon icon="file" size="lg" />
    <fe-icon icon="filter" size="xl" />
    <fe-icon icon="gear" size="2xl" />
    <fe-icon icon="barcode" size="2x" />
    <fe-icon icon="folder" size="3x" />
    <fe-icon icon="folder-open" size="4x" />
  </div>
  <h1 class="row-title">Rotate and Flip</h1>
  <div class="row">
    <fe-icon icon="user-secret" rotation="90" size="xl" />
    <fe-icon icon="bars" rotation="270" size="xl" />
    <fe-icon icon="shield-halved" rotation="180" size="xl" />
    <fe-icon icon="file" flip="horizontal" size="xl" />
    <fe-icon icon="filter" flip="vertical" size="xl" />
    <fe-icon icon="folder-open" flip="both" size="xl" />
  </div>
  <h1 class="row-title">Animation</h1>
  <div class="row">
    <fe-icon icon="user-secret" size="xl" beat />
    <fe-icon icon="bars" size="xl" beat-fade />
    <fe-icon icon="shield-halved" size="xl" bounce />
    <fe-icon icon="file" size="xl" fade />
    <fe-icon icon="filter" size="xl" flip />
    <fe-icon icon="gear" size="xl" shake />
    <fe-icon icon="barcode" size="xl" spin />
    <fe-icon icon="folder" size="xl" spin spin-reverse />
    <fe-icon icon="folder-open" size="xl" spin-pulse />
  </div>
  <h1 class="row-title">Custom Attributes</h1>
  <div class="row">
    <fe-icon icon="user-secret" size="xl" type="primary" />
    <fe-icon icon="bars" size="xl" type="success" />
    <fe-icon icon="shield-halved" size="xl" type="info" />
    <fe-icon icon="file" size="xl" type="warning" />
    <fe-icon icon="filter" size="xl" type="danger" />
    <fe-icon icon="gear" size="xl" color="#e47412" />
    <fe-icon icon="barcode" size="xl" color="#7ec102" />
    <fe-icon icon="folder" size="xl" color="skyblue" />
    <fe-icon icon="folder-open" size="xl" color="rgba(122, 122, 122, .5)" />
  </div>
</template>

<style scoped></style>
