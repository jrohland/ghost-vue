<template>
  <div class="column is-one-third">
    <div
      class="post standard-shadow"
      @click="navigateToPost"
    >
      <div
        :style="featuredImageStyle"
        class="featured-image"
      />

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
  },

  methods: {
    navigateToPost () {
      this.$router.push({
        name: 'post',
        params: {
          id: this.post.id,
          slug: this.post.slug
        }
      })
    }
  }
}
</script>

<style scoped>
.post {
  min-height: 520px;
  padding-bottom: 10px;
}

.post:hover {
  cursor: pointer;
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
