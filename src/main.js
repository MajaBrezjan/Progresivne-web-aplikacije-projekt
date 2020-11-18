import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueRouter from 'vue-router'

import Index from './components/Index.vue'
import AddSubject from './components/AddSubject.vue'

Vue.use(Buefy)
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    component: Index
  },
  {
    path: "/AddSubject",
    component: AddSubject
  }
];

const router = new VueRouter({
  routes
});


Vue.config.productionTip = false

new Vue({
 router,
  render: (h) => h(App)
}).$mount('#app')
