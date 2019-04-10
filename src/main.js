import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueClipboard from 'vue-clipboard2'
import store from './store/store.js';

import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'toastify-js/src/toastify.css';

Vue.use(BootstrapVue);
Vue.use(VueClipboard);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount('#app');
