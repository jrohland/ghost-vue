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

    <div v-else-if="isLoaded">

      <div
        v-if="posts.length === 0"
        class="text-align-center title">
        No posts found
      </div>

      <div v-else>

        <div class="posts columns is-multiline">

          <post-card
            v-for="post in posts"
            :key="post.id"
            :post="post" />

        </div>

        <div
          v-if="!hasNextPage"
          class="center">
          No more posts found
        </div>

        <div
          v-else
          class="center">
          <a
            :class="'button' + ((isLoading) ? ' is-loading' : '')"
            @click="getNextPosts">Load More</a>
        </div>

      </div>

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
      isLoading: false,
      loadError: null,
      posts: [],
      postLimit: 6,
      page: 0,
      hasNextPage: true,
      isScrolledToBottom: false
    }
  },

  watch: {
    isScrolledToBottom (isScrolledToBottom) {
      if (isScrolledToBottom) this.getNextPosts()
    }
  },

  mounted () {
    this.getNextPosts()
    window.addEventListener('scroll', this.scrolledToBottom)
  },

  destroyed () {
    window.removeEventListener('scroll', this.scrolledToBottom)
  },

  methods: {
    getNextPosts () {
      if (!this.hasNextPage || this.isLoading) return

      this.isLoading = true
      this.page++

      const params = {
        limit: this.postLimit,
        page: this.page
      }

      if (this.$route.params.tag) params.filter = 'tag:' + this.$route.params.tag

      Ghost.getPosts(params)
        .then(result => {
          this.posts.push(...result.posts)
          this.hasNextPage = result.meta.pagination.next
          this.isLoaded = true
          this.isLoading = false
        })
        .catch(error => {
          this.loadError = error.body
        })
    },

    scrolledToBottom () {
      const scrollY = window.scrollY
      const visible = document.documentElement.clientHeight
      const pageHeight = document.documentElement.scrollHeight
      const bottomOfPage = visible + scrollY >= (pageHeight - 10)
      this.isScrolledToBottom = bottomOfPage || pageHeight < visible
    }
  }
}
</script>

<style scoped>
.spinner {
  margin: auto;
  position: relative;
  top: calc(50% - 200px);
}

.center {
  text-align: center;
}
</style>
