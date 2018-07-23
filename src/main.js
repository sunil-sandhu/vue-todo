import Vue from 'vue'
import ToDo from './ToDo.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(ToDo)
}).$mount('#app')
