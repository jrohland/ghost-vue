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
            <div class="subscribe text-align-center">
              <div class="title">Subscribe</div>
              Keep up to date.

              <b-field>
                <b-input
                  v-model="subscribeEmail"
                  placeholder="Email"
                  type="email"
                  rounded />
              </b-field>

              <a
                class="button is-primary"
                @click="subscribe">Sign Up</a>
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  components: {
    'app-header': Header
  },

  data () {
    return {
      subscribeEmail: ''
    }
  },

  methods: {
    subscribe () {
      console.log(this.subscribeEmail)
    }
  }
}
</script>

<style>
@import './assets/styles/global.css';
@import './assets/styles/transitions.css';

.main-content {
  margin-top: 155px;
}
</style>
