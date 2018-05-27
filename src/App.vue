<template>
  <div id="app">
    <app-header />

    <div class="container">
      <router-view/>
    </div>

  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  components: {
    'app-header': Header
  }
}
</script>

<style lang="scss">
@import './assets/styles/global.css';

.container {
  margin-top: 80px;
  height: 3000px;
}
</style>
