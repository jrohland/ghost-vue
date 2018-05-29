import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import FormattersPlugin from '@/plugins/formatters'
import LoadingSpinner from '@/components/LoadingSpinner'

Vue.use(VueResource)
Vue.use(FormattersPlugin)
Vue.component('loading-spinner', LoadingSpinner)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
