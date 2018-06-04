<template>
  <nav
    ref="nav"
    :class="classes"
    role="navigation"
    aria-label="main navigation">

    <div class="navbar-brand">
      <div class="title">
        <router-link :to="{ name: 'posts' }">{{ title }}</router-link>
      </div>
      <div
        class="description"
        v-html="description" />
    </div>

  </nav>
</template>

<script>
import config from '@/config'

export default {
  data () {
    return {
      scrollTop: 0
    }
  },

  computed: {
    classes: {
      get () {
        const classes = ['navbar', 'is-fixed-top']

        if (this.scrollTop > 50) classes.push('scrolled', 'standard-shadow')

        return classes
      }
    },

    title: {
      get () {
        return config.app.title
      }
    },

    description: {
      get () {
        return config.app.description
      }
    }
  },

  mounted () {
    this.scrollTop = document.body.scrollTop
    window.addEventListener('scroll', this.handleScroll)
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll () {
      this.scrollTop = window.scrollY
    }
  }
}
</script>

<style scoped>
.navbar {
  height: 150px;
  -webkit-transition: height .5s, line-height .5s;
  transition: height .5s, line-height .5s;
}

.navbar.scrolled {
  height: 60px !important;
  border-bottom: 1px solid var(--border-color);
  background-color: #fff;
  opacity: .8;
}

.navbar-brand {
  margin: auto;
  display: flex;
  flex-direction: column;
}

.navbar.scrolled .navbar-brand {
  flex-direction: row;
}

.title {
  display: flex;
  align-self: center;
  font-size: 4rem;
  transition: font-size .5s;
  margin-bottom: 0px;
}

.navbar.scrolled .title {
  font-size: 2rem;
  line-height: 60px !important;
  margin-right: 15px;
}

.description {
  display: flex;
  align-self: center;
  text-align: center;
}
</style>
