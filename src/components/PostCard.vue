<template>
  <div class="column is-one-third">

    <div class="post standard-shadow">

      <div
        :style="featuredImageStyle"
        class="featured-image" />

      <div class="date text-align-center">
        {{ post.created_at | date }}
      </div>

      <div class="title text-align-center">
        {{ post.title }}
      </div>

    </div>

  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
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
  }
}
</script>

<style scoped>
.post {
  height: 520px;
}

.featured-image {
  width: auto;
  height: 400px;
  background: #c5d2d9 no-repeat 50%;
  background-image: none;
  background-size: auto auto;
  background-size: cover;
  margin-bottom: 10px;
}
</style>
