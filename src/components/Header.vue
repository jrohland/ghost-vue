<template>
  <div>
    <nav
      ref="nav"
      :class="classes"
      role="navigation"
      aria-label="main navigation">

      <div class="container">
        <div class="navbar-brand column is-four-fifths">
          <a
            role="button"
            class="menu-icon"
            aria-label="menu"
            aria-expanded="false"
            @click="showSideMenu = !showSideMenu">
            <div aria-hidden="true" />
            <div aria-hidden="true" />
            <div aria-hidden="true" />
          </a>

          <div class="title">
            <router-link :to="{ name: 'posts' }">{{ title }}</router-link>
          </div>
          <div
            class="description"
            v-html="description" />
        </div>
      </div>
    </nav>

    <side-menu v-model="showSideMenu" />
  </div>
</template>

<script>
import config from '@/config'
import SideMenu from './SideMenu'

export default {
  components: {
    SideMenu
  },

  data () {
    return {
      headerHeight: 220,
      scrollTop: 0,
      showSideMenu: false
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

<style lang="scss" scoped>
$menu_icon_height: 50px;
$menu_icon_scrolled_height: 30px;

.navbar {
  height: var(--header-height);
  -webkit-transition: height .5s, line-height .5s, font-size .5s;
  transition: height .5s, line-height .5s, font-size .5s;
}

.navbar.scrolled {
  height: var(--header-scrolled-height) !important;
  border-bottom: 1px solid var(--border-color);
  background-color: #fff;
  opacity: .8;
}

.navbar-brand {
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px;
  height: var(--header-height);
}

.navbar.scrolled .navbar-brand {
  flex-direction: row;
  height: var(--header-scrolled-height);
}

.menu-icon {
  position: absolute;
  height: $menu_icon_height;
  width: 50px;
  padding: 5px;
  top: calc(var(--header-height) / 2 - 40px);
  left: 50px;
}

.menu-icon:hover {
  background-color: var(--menu-icon-hover-color);
  cursor: pointer;
}

.menu-icon div {
  width: 100%;
  height: 5px;
  background-color: var(--header-title-color);
  margin: calc(((#{$menu_icon_height} - 10px) / 3) / 2) 0;
}

.navbar.scrolled .menu-icon {
  height: $menu_icon_scrolled_height;
  width: 30px;
  top: calc(var(--header-scrolled-height) / 2 - (#{$menu_icon_scrolled_height} / 2));
}

.navbar.scrolled .menu-icon div {
  height: 3px;
  margin: calc(((#{$menu_icon_scrolled_height} - 10px) / 3) / 2) 0;
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
