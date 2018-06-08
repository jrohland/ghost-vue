<template>
  <div>
    <div
      v-if="loadError"
      class="notification is-danger text-align-center">

      <div class="title">Couldn't load page!</div>

      <div v-if="loadError.errors && loadError.errors.length">
        {{ loadError.errors[0].message }}
      </div>

    </div>

    <div v-else-if="isLoaded">

      <div class="page">

        <div class="title text-align-center">
          {{ post.title }}
        </div>

        <div
          class="page-body content"
          v-html="post.html" />

      </div>
    </div>

    <div
      v-else
      class="h-100">

      <loading-spinner
        :size="200"
        class="spinner" />

    </div>

  </div>
</template>

<script>
import Ghost from '@/lib/ghost.js'

export default {
  props: {
    id: {
      type: String,
      default: null
    },

    slug: {
      type: String,
      default: null
    }
  },

  data () {
    return {
      isLoaded: false,
      loadError: null,
      post: {}
    }
  },

  mounted () {
    if (this.slug) {
      Ghost.getPostBySlug(this.slug)
        .then(post => {
          this.post = post
          this.isLoaded = true
        })
        .catch(error => {
          this.loadError = error.body
        })
    }
  }
}
</script>

<style scoped>
.page {
  background-color: #fff;
  width: 90%;
  min-height: 200px;
  padding: 30px;
}

.spinner {
  margin: auto;
  position: relative;
  top: calc(50% - 200px);
}
</style>
