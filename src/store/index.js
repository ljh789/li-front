import Vuex from 'vuex'
import login from './login'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    login
  }
})
export default store
