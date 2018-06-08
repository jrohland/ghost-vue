<template>
  <div id="app">

    <app-header />

    <div class="main-content">

      <div class="container">

        <div class="columns">

          <transition
            name="page"
            mode="out-in">
            <router-view
              :key="$route.name + ($route.params.tag || $route.params.slug || '')"
              class="main-column column" />
          </transition>

          <div class="is-one-fifth column side-bar">
            <subscribe class="subscribe-sidebar" />

            <tags class="tags-sidebar" />
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
import Header from '@/components/Header'
import Subscribe from '@/components/Subscribe'
import Tags from '@/components/Tags'

export default {
  components: {
    'app-header': Header,
    'subscribe': Subscribe,
    'tags': Tags
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

.tags-sidebar {
  margin-top: 50px;
}
</style>
