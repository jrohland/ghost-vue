<template>
  <div>
    <div
      v-if="post.feature_image"
      :style="featuredImageStyle"
      class="featured-image" />

    <div class="post standard-shadow">

      <div class="date text-align-center">
        {{ post.created_at | date }}
      </div>

      <div class="title text-align-center">
        {{ post.title }}
      </div>

      <div
        class="post-body"
        v-html="post.html" />

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
      post: {}
    }
  },

  computed: {
    featuredImageStyle: {
      get () {
        const styles = {}
        if (this.post.feature_image) {
          styles.backgroundImage = `url(${this.post.feature_image})`
        }
        return styles
      }
    }
  },

  mounted () {
    console.log(this.slug)
    if (this.slug) {
      Ghost.getPostBySlug(this.slug)
        .then(post => {
          this.post = post
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.featured-image {
  width: auto;
  height: 600px;
  background: #c5d2d9 no-repeat 50%;
  background-image: none;
  background-size: auto auto;
  background-size: cover;
  margin-bottom: 10px;
}

.post {
  background-color: #fff;
  width: 90%;
  margin: -100px auto 0 auto;
  min-height: 200px;
  padding: 30px;
}
</style>
