<template>
  <div
    id="app"
    class="h-100">

    <app-header />

    <div class="main-content h-100">

      <div class="container h-100">

        <div class="columns h-100">

          <transition
            name="page"
            mode="out-in">
            <router-view class="main-column column  h-100" />
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
  margin-top: var(--header-height);
}
</style>
