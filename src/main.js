// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import router from './router'
import Vue from 'vue'
import App from './App'
import store from './store'
import Foot from './components/foot.vue'
import myAxios from './api'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.prototype.$myAxios = myAxios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App, Foot },
  template: '<App/>'
})
