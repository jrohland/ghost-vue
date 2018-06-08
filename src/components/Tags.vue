<template>
  <div class="text-align-center">
    <div class="title">Tags</div>

    <div v-if="error">{{ error }}</div>

    <div class="tags text-align-center">

      <router-link
        v-for="tag in tags"
        :key="tag.id"
        :to="{ name: 'tag', params: { tag: tag.slug } }"
        class="tag">
        {{ tag.name }}
      </router-link>

    </div>

  </div>
</template>

<script>
import Ghost from '@/lib/ghost.js'

export default {
  data () {
    return {
      tags: [],
      error: null
    }
  },

  created () {
    Ghost.getTags({
      limit: 'all'
    })
      .then(tags => {
        this.tags = tags
      })
      .catch(error => {
        this.error = error.body
      })
  }
}
</script>

<style scoped>
.tags {
  display: flex;
  justify-content: center;
}
</style>
