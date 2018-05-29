import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import FormattersPlugin from '@/plugins/formatters'

Vue.use(VueResource)
Vue.use(FormattersPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
