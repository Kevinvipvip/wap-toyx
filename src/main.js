import Vue from 'vue'
import App from './App.vue'
import router from './router'
import config from './config'
import utils from './utils'
import axios from 'axios'

Vue.config.productionTip = false;

Vue.prototype.config = config;
Vue.prototype.utils = utils;
Vue.prototype.$axios = axios;

// 公共组件
import Header from './components/Header'

Vue.component('Header', Header);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
