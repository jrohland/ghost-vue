import Vue from 'vue'
import config from '@/config'

const init = () => {
  if (window.ghost) return true

  console.log('injecting ghost sdk')
  const ghostScript = document.createElement('script')
  const src = config.ghost.host + config.ghost.sdkPath
  console.log(src)
  ghostScript.setAttribute('src', src)
  document.head.appendChild(ghostScript)

  let ctr = 0
  return new Promise((resolve, reject) => {
    let handle = window.setInterval(() => {
      if (window.ghost) {
        console.log('ghost sdk loaded... init\'ing')
        window.ghost.init({
          clientId: config.ghost.clientId,
          clientSecret: config.ghost.clientSecret
        })

        resolve()
        clearInterval(handle)
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
    if (!window.ghost) await init()

    console.log('getting posts')

    return new Promise((resolve, reject) => {
      Vue.http
        .get(window.ghost.url.api('posts', params))
        .then(result => {
          resolve(result.body.posts)
        })
        .catch(error => reject(error))
    })
  }
}
