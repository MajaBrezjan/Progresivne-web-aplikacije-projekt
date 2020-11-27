import Vue from 'vue';
import App from './App.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import VueRouter from 'vue-router';

import routes from "./router"

Vue.use(Buefy)
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
});


Vue.config.productionTip = false

new Vue({
 router,
  render: (h) => h(App)
}).$mount('#app')
