import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(VueResource)
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
