<template>
  <div class="subscribe text-align-center">
    <div
      v-if="subscribeError"
      class="notification is-danger text-align-center"
    >
      <div class="title">
        Couldn't subscribe!
      </div>

      <div v-if="subscribeError.errors && subscribeError.errors.length">
        {{ subscribeError.errors[0].message }}
      </div>
    </div>

    <div v-else-if="!isSubscribed">
      <div class="title">
        Subscribe
      </div>
      Keep up to date.

      <div class="field">
        <input
          v-model="subscribeEmail"
          placeholder="Email"
          type="email"
          class="input is-rounded"
        >
      </div>

      <a
        class="button is-primary"
        @click="subscribe"
      >Sign Up</a>
    </div>

    <div
      v-else
      class="notification is-success"
    >
      Thanks for subscribing!
    </div>
  </div>
</template>

<script>
import Ghost from '@/lib/ghost.js'

export default {
  data () {
    return {
      isSubscribed: false,
      subscribeError: null,
      subscribeEmail: ''
    }
  },

  methods: {
    subscribe () {
      Ghost.addSubscription({
        email: this.subscribeEmail
      })
        .then(() => {
          this.isSubscribed = true
        })
        .catch(error => {
          this.subscribeError = error.body
        })
    }
  }
}
</script>
