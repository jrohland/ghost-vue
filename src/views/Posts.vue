<template>
  <div class="posts columns is-multiline">

    <post-card
      v-for="post in posts"
      :key="post.id"
      :post="post" />

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
      posts: []
    }
  },

  async mounted () {
    Ghost.getPosts({ limit: 9 })
      .then(posts => {
        this.posts = posts
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>
