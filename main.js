import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App.vue'
import kafelek from './kafelek.vue'
import narzedzia from './narzedzia.vue'
Vue.use(VueFire)


Vue.component('kafelek', kafelek);
Vue.component('narzedzia', narzedzia);
new Vue({
  el: '#app',
  render: h => h(App)
})
