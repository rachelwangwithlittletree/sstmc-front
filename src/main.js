import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import router from "./router";
// import router from "./router"

Vue.use(iView)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  
}).$mount('#app')
