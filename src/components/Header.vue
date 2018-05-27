<template>
  <nav
    ref="nav"
    :class="classes"
    role="navigation"
    aria-label="main navigation">

    <div class="navbar-brand">
      Header
    </div>

  </nav>
</template>

<script>
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

        if (this.scrollTop > 100) classes.push('scrolled', 'standard-shadow')

        return classes
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
  line-height: 150px;
  -webkit-transition: height .5s, line-height .5s;
  transition: height .5s, line-height .5s;
}

.navbar.scrolled {
  height: 60px !important;
  line-height: 60px !important;
  border-bottom: 1px solid var(--border-color);
}
</style>
