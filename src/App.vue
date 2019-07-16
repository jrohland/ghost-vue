<template>
  <div id="app">
    <app-header />

    <div class="main-content">
      <div class="container">
        <div class="columns">
          <transition
            name="page"
            mode="out-in"
          >
            <router-view
              :key="$route.name + ($route.params.tag || $route.params.slug || '')"
              class="main-column column"
            />
          </transition>

          <div class="is-one-fifth column side-bar">
            <div class="social-sidebar">
              <a
                v-if="social.facebook"
                :href="'https://facebook.com/' + social.facebook"
              >
                <font-awesome-icon
                  :icon="['fab', 'facebook-square']"
                  size="lg"
                />
              </a>

              <a
                v-if="social.twitter"
                :href="'https://twitter.com/' + social.twitter"
              >
                <font-awesome-icon
                  :icon="['fab', 'twitter-square']"
                  size="lg"
                />
              </a>

              <a
                v-if="social.instagram"
                :href="'https://instagram.com/' + social.instagram"
              >
                <font-awesome-icon
                  :icon="['fab', 'instagram']"
                  size="lg"
                />
              </a>
            </div>

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
import { app } from '@/config'

export default {
  components: {
    'app-header': Header,
    'subscribe': Subscribe,
    'tags': Tags
  },

  computed: {
    social: {
      get () {
        return app.social
      }
    }
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

.social-sidebar {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.social-sidebar a {
  margin: 0 10px;
}

.subscribe-sidebar,
.tags-sidebar {
  margin-top: 50px;
}
</style>
