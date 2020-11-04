import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/style.css'
Vue.config.productionTip = false
import store from './store'

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
