import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import BootstrapVue from 'bootstrap-vue'
// import {VueMasonryPlugin} from 'vue-masonry';

// Vue.use(VueMasonryPlugin)



// Vue.use(BootstrapVue)

// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/scss/main.scss'


var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

