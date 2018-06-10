import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import FormattersPlugin from '@/plugins/formatters'
import LoadingSpinner from '@/components/LoadingSpinner'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookSquare, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(VueResource)
Vue.use(FormattersPlugin)
Vue.component('loading-spinner', LoadingSpinner)

// Fontawesome icons
library.add(faFacebookSquare, faTwitterSquare, faInstagram)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
