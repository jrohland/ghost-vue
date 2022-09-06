import Vue from 'vue'
import Router from 'vue-router'
import config from './config'

Vue.use(Router)

const pageRoutes = config.app.pages.map(page => {
  return {
    path: `/${page.slug}`,
    component: () => import(/* webpackChunkName: "page" */ './views/PageItem.vue'),
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
      component: () => import(/* webpackChunkName: "posts" */ './views/PostList.vue')
    },
    ...pageRoutes,
    {
      path: '/tag/:tag',
      name: 'tag',
      component: () => import(/* webpackChunkName: "posts" */ './views/PostList.vue'),
      props: true
    },
    {
      path: '/:slug',
      name: 'post',
      component: () => import(/* webpackChunkName: "post" */ './views/PostItem.vue'),
      props: true
    }
  ]
})
