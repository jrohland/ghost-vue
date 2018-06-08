<template>
  <nav
    ref="nav"
    :class="classes"
    role="navigation"
    aria-label="main navigation">

    <div class="container">
      <div class="navbar-brand column is-four-fifths">
        <div class="title">
          <router-link :to="{ name: 'posts' }">{{ title }}</router-link>
        </div>
        <div
          class="description"
          v-html="description" />
      </div>
    </div>

  </nav>
</template>

<script>
import config from '@/config'

export default {
  data () {
    return {
      headerHeight: 220,
      scrollTop: 0
    }
  },

  computed: {
    classes: {
      get () {
        const classes = ['navbar', 'is-fixed-top']

        if (this.scrollTop > this.headerHeight) classes.push('scrolled', 'standard-shadow')

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
  height: var(--header-height);
  -webkit-transition: height .5s, line-height .5s, font-size .5s;
  transition: height .5s, line-height .5s, font-size .5s;
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
  padding: 0px;
}

.navbar.scrolled .navbar-brand {
  flex-direction: row;
  justify-content: center;
}

.title {
  font-family: 'Caveat', 'Cormorant Garamond', 'Avenir', Helvetica, Arial, sans-serif;
  display: flex;
  align-self: center;
  font-size: 4.5rem;
  transition: font-size .5s;
  margin-bottom: 0px !important;
}

.title a {
  color: var(--header-title-color);
}

.title a:hover {
  color: var(--header-title-hover-color);
}

.navbar.scrolled .title {
  font-size: 2rem;
  line-height: 60px !important;
  margin-right: 30px;
  margin-bottom: 0px;
}

.description {
  display: flex;
  align-self: center;
  text-align: center;
}

.navbar.scrolled .description {
  font-size: .8rem;
}
</style>
