import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/element.js'
import '@/styles/index.scss' // global css

// 加载全局方法
import request from "@/utils/request";
Object.defineProperty(Vue.prototype, "request", {
  value: request
});


Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
})
