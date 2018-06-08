<template>
  <div>
    <div
      v-if="loadError"
      class="notification is-danger text-align-center">

      <div class="title">Couldn't load posts!</div>

      <div v-if="loadError.errors && loadError.errors.length">
        {{ loadError.errors[0].message }}
      </div>

    </div>

    <div
      v-else-if="isLoaded"
      class="posts columns is-multiline">

      <post-card
        v-for="post in posts"
        :key="post.id"
        :post="post" />

    </div>

    <div
      v-else
      class="loading">

      <loading-spinner
        :size="200"
        class="spinner" />

    </div>

  </div>
</template>

<script>
import Ghost from '@/lib/ghost.js'
import PostCard from '@/components/PostCard'

export default {
  components: {
    'post-card': PostCard
  },

  data () {
    return {
      isLoaded: false,
      loadError: null,
      posts: [],
      postLimit: 9
    }
  },

  async mounted () {
    const params = {
      limit: this.postLimit
    }

    if (this.$route.params.tag) params.filter = 'tag:' + this.$route.params.tag

    Ghost.getPosts(params)
      .then(posts => {
        this.posts = posts
        this.isLoaded = true
      })
      .catch(error => {
        this.loadError = error.body
      })
  }
}
</script>

<style scoped>
.spinner {
  margin: auto;
  position: relative;
  top: calc(50% - 200px);
}
</style>
