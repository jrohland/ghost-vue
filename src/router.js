import Vue from 'vue'
import Router from 'vue-router'
import config from './config'

Vue.use(Router)

const pageRoutes = config.app.pages.map(page => {
  return {
    path: `/${page.slug}`,
    component: () => import(/* webpackChunkName: "page" */ './views/Page.vue'),
    props: {
      slug: page.slug
    }
  }
})

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'posts',
      component: () => import(/* webpackChunkName: "posts" */ './views/Posts.vue')
    },
    ...pageRoutes,
    {
      path: '/:slug',
      name: 'post',
      component: () => import(/* webpackChunkName: "post" */ './views/Post.vue'),
      props: true
    }
  ]
})
