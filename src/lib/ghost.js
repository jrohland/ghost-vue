import Vue from 'vue'
import config from '@/config'

let initialized = false
let isInitalizing = false

const init = () => {
  if (initialized) return true

  if (isInitalizing) {
    return new Promise((resolve, reject) => {
      let handle = window.setInterval(() => {
        if (initialized) {
          clearInterval(handle)
          resolve()
        }
        ctr++
        if (ctr > 1000) {
          reject(new Error('Unable to load ghost sdk'))
          clearInterval(handle)
        }
      }, 5)
    })
  }

  isInitalizing = true

  const ghostScript = document.createElement('script')
  const src = config.ghost.host + config.ghost.sdkPath
  ghostScript.setAttribute('src', src)
  document.head.appendChild(ghostScript)

  let ctr = 0
  return new Promise((resolve, reject) => {
    let handle = window.setInterval(() => {
      if (window.ghost) {
        window.ghost.init({
          clientId: config.ghost.clientId,
          clientSecret: config.ghost.clientSecret
        })

        clearInterval(handle)
        initialized = true
        isInitalizing = false
        resolve()
      }
      ctr++
      if (ctr > 1000) {
        reject(new Error('Unable to load ghost sdk'))
        clearInterval(handle)
      }
    }, 5)
  })
}

export default {
  async getPosts (params) {
    if (!initialized) await init()

    return new Promise((resolve, reject) => {
      Vue.http
        .get(window.ghost.url.api('posts', params))
        .then(result => {
          resolve(result.body)
        })
        .catch(error => reject(error))
    })
  },

  async getPostBySlug (slug) {
    if (!initialized) await init()

    return new Promise((resolve, reject) => {
      Vue.http
        .get(window.ghost.url.api('posts/slug/' + slug))
        .then(result => {
          if (!result.body.posts || result.body.posts.length !== 1) reject(new Error('Post not found'))
          resolve(result.body.posts[0])
        })
        .catch(error => reject(error))
    })
  },

  async addSubscription (data) {
    if (!initialized) await init()

    return new Promise((resolve, reject) => {
      Vue.http
        .post(window.ghost.url.api('subscribers/'), {
          subscribers: [ data ]
        })
        .then(result => {
          resolve()
        })
        .catch(error => reject(error))
    })
  },

  async getTags (params) {
    if (!initialized) await init()

    return new Promise((resolve, reject) => {
      Vue.http
        .get(window.ghost.url.api('tags', params))
        .then(result => {
          resolve(result.body.tags)
        })
        .catch(error => reject(error))
    })
  }
}
