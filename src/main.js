import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import FormattersPlugin from '@/plugins/formatters'

Vue.use(VueResource)
Vue.use(FormattersPlugin)

Vue.component(Buefy.Field.name, Buefy.Field)
Vue.component(Buefy.Input.name, Buefy.Input)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
