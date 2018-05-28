import Vue from 'vue'
import Router from 'vue-router'
import Posts from './views/Posts.vue'
import Post from './views/Post.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/posts',
      name: 'posts',
      component: Posts,
      alias: '/'
    },
    {
      path: '/post/:slug',
      name: 'post',
      component: Post,
      props: true
    }
  ]
})
