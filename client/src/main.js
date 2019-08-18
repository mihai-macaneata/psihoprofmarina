import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/clean-blog.scss'

var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

