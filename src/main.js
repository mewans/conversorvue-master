import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
//<script src="https://cdn.jsdelivr.net/npm/vuetify@1.x/dist/vuetify.js"></script>
import vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
Vue.prototype.$http = axios;
//import vuetify from 'vuetify'
Vue.config.productionTip = false;
Vue.use(vuetify);
new Vue({
  //vuetify,
  render: h => h(App),
}).$mount('#app')
