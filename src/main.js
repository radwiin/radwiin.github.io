import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css"; //Vuesax styles
import "material-icons/iconfont/material-icons.css";
import "@/styles/index.scss";

Vue.use(Vuesax, {
  // options here
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
