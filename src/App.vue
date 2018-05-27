<template>
  <div id="app">
    <app-header />

    <div class="main-content">

      <div class="container">
        <router-view/>
      </div>

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

.main-content {
  margin-top: 150px;
}
</style>
