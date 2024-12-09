<script setup lang="ts"></script>

<template>
  <h1 class="title">Custom Component for Vue3.x</h1>
  <div class="content-container">
    <nav class="nav">
      <router-link to="/">Icon</router-link>
      <router-link to="/button">Button</router-link>
      <router-link to="/card">Card</router-link>
      <router-link to="/dialog">Dialog</router-link>
      <router-link to="/paper">Paper</router-link>
      <router-link to="/collapse">Collapse</router-link>
      <router-link to="/tooltip">Tooltip</router-link>
      <router-link to="/dropdown">Dropdown</router-link>
    </nav>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  font-weight: 200;
  height: 40px;
}
.content-container {
  display: flex;

  .nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1.5rem;
    letter-spacing: 0.05em;
  }

  .content {
    flex-grow: 1;
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;
    height: calc(100vh - 160px);
  }
}

.active {
  border-bottom: 2px solid;
}
</style>
