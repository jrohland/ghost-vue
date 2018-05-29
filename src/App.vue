<template>
  <div id="app">
    <app-header />

    <div class="main-content">

      <div class="container">

        <div class="columns">

          <transition
            name="page"
            mode="out-in">
            <router-view class="column" />
          </transition>

          <div class="is-one-fifth side-bar">
            <subscribe />
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
import Header from '@/components/Header'
import Subscribe from '@/components/Subscribe'

export default {
  components: {
    'app-header': Header,
    'subscribe': Subscribe
  }
}
</script>

<style>
@import '~bulma/css/bulma.css';
@import './assets/styles/global.css';
@import './assets/styles/transitions.css';

.main-content {
  margin-top: 155px;
}
</style>
