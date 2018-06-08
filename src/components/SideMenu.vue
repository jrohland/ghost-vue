<template>
  <div class="side-menu-container">

    <transition name="slide-from-left">
      <div
        v-show="value"
        class="side-menu standard-shadow">

        <a
          role="button"
          class="close"
          aria-label="Close"
          @click="close">&times;</a>

        <div class="links">

          <a @click="navigate('/')">Home</a>

          <a
            v-for="(page, index) in pages"
            :key="index"
            @click="navigate(page.slug)">{{ page.name }}</a>

        </div>

      </div>
    </transition>

    <transition name="fade">
      <div
        v-show="value"
        class="hidden-content-overlay" />
    </transition>
  </div>
</template>

<script>
import config from '@/config'

export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    pages: {
      get () {
        return config.app.pages
      }
    }
  },

  methods: {
    close () {
      this.$emit('input', false)
    },

    navigate (path) {
      this.$router.push({ path })
      this.close()
    }
  }
}
</script>

<style scoped>
.side-menu-container {
  opacity: 1;
}

.side-menu {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100%;
  width: 400px;
  background-color: #fff;
}

.hidden-content-overlay {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.7);
  background: -webkit-radial-gradient(center,ellipse farthest-corner,rgba(0,0,0,0.4) 0,rgba(0,0,0,0.9) 100%);
  filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#66000000',endColorstr='#e6000000',GradientType=1)";
}

.close {
  position: absolute;
  top: 0;
  right: 20px;
  font-size: 50px;
  line-height: 50px;
}

.links {
  margin: 100px 50px;
  font-family: 'Caveat', 'Cormorant Garamond', 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 50px;
  display: flex;
  flex-direction: column;
}
</style>
