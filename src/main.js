import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
Vue.prototype.$http = axios;
Vue.config.productionTip = false;
Vue.use(vuetify);
new Vue({
  render: h => h(App),
}).$mount('#app')
