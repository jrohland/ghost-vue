<template>
  <div class="posts">
    <div
      v-for="post in posts"
      :key="post.id">
      {{ post.title }}
    </div>
  </div>
</template>

<script>
import Ghost from '@/lib/ghost.js'

export default {
  data () {
    return {
      posts: []
    }
  },

  async mounted () {
    Ghost.getPosts({ limit: 2 })
      .then(posts => {
        posts.forEach(post => {
          this.posts.push(post)
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>
