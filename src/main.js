import Vue from "vue";
import router from "ROOT/router";

import App from "ROOT/App";

console.log(router.currentRoute.path);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
