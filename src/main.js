import Vue from 'vue'
import App from './App.vue'
import FastClick from 'fastclick'
import router from './router'
import store from './store'
import '@/common/stylus/index.styl'

FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
