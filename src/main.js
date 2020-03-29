import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import 'assets/css/index.less'
import router from "./router";
// import router from "./router"
import locale from 'iview/dist/locale/zh-CN';

// Vue.use(iView)

Vue.config.productionTip = false
Vue.use(iView, {
  // size: 'large',
  transfer: true,
  locale
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
  
}).$mount('#app')
