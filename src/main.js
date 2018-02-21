import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes.js'

require('bootstrap')

Vue.use(VueRouter);

const enrutador = new VueRouter({
  routes: routes,
  //para eliminar el hash de la direccion
  mode: 'history'
})

new Vue({
  el: '#app',
  router: enrutador,
  render: h => h(App)
})
