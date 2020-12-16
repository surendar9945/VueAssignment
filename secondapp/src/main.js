/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import VueRouter from "vue-router";
// eslint-disable-next-line prettier/prettier
import Routes from './routes'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);

Vue.config.productionTip = false;

// eslint-disable-next-line no-undef
const router = new VueRouter({
  routes: Routes
});

new Vue({
  render: h => h(App),
  router: router
}).$mount("#app");
