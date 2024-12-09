<script setup lang="ts"></script>

<template>
  <h1 class="title">Custom Component for Vue3.x</h1>
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
</template>

<style lang="scss" scoped>
.title {
  font-weight: 200;
}

.nav {
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: space-evenly;
}

.content {
  margin-top: 2em;
}

.active {
  border-bottom: 2px solid;
}
</style>
