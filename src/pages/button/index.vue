<script setup lang="ts">
import { ref } from "vue";

const btnRef = ref();

const handleClick = () => {
  console.debug(btnRef.value.ref);
  window.alert("button has been clicked!");
};
</script>

<template>
  <h1 class="row-title">General Usage</h1>
  <div class="row">
    <fe-button>default button</fe-button>
    <fe-button type="primary">primary button</fe-button>
    <fe-button type="info">info button</fe-button>
    <fe-button type="success">success button</fe-button>
    <fe-button type="warning">warning button</fe-button>
    <fe-button type="danger">danger button</fe-button>
  </div>
  <h1 class="row-title">Plain Button</h1>
  <div class="row">
    <fe-button plain>default button</fe-button>
    <fe-button type="primary" plain>primary button</fe-button>
    <fe-button type="info" plain>info button</fe-button>
    <fe-button type="success" plain>success button</fe-button>
    <fe-button type="warning" plain>warning button</fe-button>
    <fe-button type="danger" plain>danger button</fe-button>
  </div>
  <h1 class="row-title">Round Button</h1>
  <div class="row">
    <fe-button round>default button</fe-button>
    <fe-button type="primary" round>primary button</fe-button>
    <fe-button type="info" round>info button</fe-button>
    <fe-button type="success" round>success button</fe-button>
    <fe-button type="warning" round>warning button</fe-button>
    <fe-button type="danger" round>danger button</fe-button>
  </div>
  <h1 class="row-title">Disabled Button</h1>
  <div class="row">
    <fe-button disabled>default button</fe-button>
    <fe-button type="primary" disabled>primary button</fe-button>
    <fe-button type="info" disabled>info button</fe-button>
    <fe-button type="success" disabled>success button</fe-button>
    <fe-button type="warning" disabled>warning button</fe-button>
    <fe-button type="danger" disabled>danger button</fe-button>
  </div>
  <h1 class="row-title">Loading Button</h1>
  <div class="row">
    <fe-button loading>default button</fe-button>
    <fe-button type="primary" loading>primary button</fe-button>
    <fe-button type="info" loading>info button</fe-button>
    <fe-button type="success" loading>success button</fe-button>
    <fe-button type="warning" loading>warning button</fe-button>
    <fe-button type="danger" loading>danger button</fe-button>
  </div>
  <h1 class="row-title">Icon Button</h1>
  <div class="row">
    <fe-button icon="file">default button</fe-button>
    <fe-button type="primary" icon="gear">primary button</fe-button>
    <fe-button type="info" icon="folder">info button</fe-button>
    <fe-button type="success" icon="bug">success button</fe-button>
    <fe-button type="warning" icon="code">warning button</fe-button>
    <fe-button type="danger" icon="cube">danger button</fe-button>
  </div>
  <h1 class="row-title">Size</h1>
  <div class="row">
    <fe-button icon="file" size="small">default button</fe-button>
    <fe-button type="primary" icon="gear" size="small"
      >primary button
    </fe-button>
    <fe-button type="info" icon="folder">info button</fe-button>
    <fe-button type="success" icon="bug">success button</fe-button>
    <fe-button type="warning" icon="code" size="large"
      >warning button
    </fe-button>
    <fe-button type="danger" icon="cube" size="large">danger button</fe-button>
  </div>
  <h1 class="row-title">Shape</h1>
  <div class="row">
    <fe-button circle icon="file"></fe-button>
    <fe-button type="primary" icon="gear" circle></fe-button>
    <fe-button type="info" icon="folder" circle></fe-button>
    <fe-button type="success" icon="bug" circle></fe-button>
    <fe-button type="warning" icon="code" circle></fe-button>
    <fe-button type="danger" icon="cube" circle></fe-button>
  </div>
  <h1 class="row-title">Event</h1>
  <div class="row">
    <fe-button type="primary" @click="handleClick" ref="btnRef"
      >primary button
    </fe-button>
  </div>
</template>

<style scoped></style>
