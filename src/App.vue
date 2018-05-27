<template>
  <div id="app">
    <app-header />

    <div class="main-content">

      <div class="container">
        <transition
          name="page"
          mode="out-in">
          <router-view/>
        </transition>
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

<style>
@import './assets/styles/global.css';
@import './assets/styles/transitions.css';

.main-content {
  margin-top: 150px;
}
</style>
