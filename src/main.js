import Vue from 'vue'
import App from './App.vue'

import removegreekaccent from './directives/removegreekaccent'

Vue.directive('removegreekaccent', removegreekaccent)

new Vue({
  el: '#app',
  render: h => h(App)
})
