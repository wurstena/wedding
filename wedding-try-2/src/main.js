import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import imageList from './data.js';

let data = {
  images: imageList,
}

Vue.config.productionTip = false;

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount("#app");
