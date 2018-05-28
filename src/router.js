import Vue from 'vue'
import Router from 'vue-router'
import Posts from './views/Posts.vue'
import Post from './views/Post.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'posts',
      component: Posts
    },
    {
      path: '/:slug',
      name: 'post',
      component: Post,
      props: true
    }
  ]
})
