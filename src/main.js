import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "./styles/gobal.less";

import showMessage from "./utils/showMessage";
Vue.prototype.$showMessage = showMessage;
// window.showMessage = showMessage;
// showMessage("Hello world", "success");

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
