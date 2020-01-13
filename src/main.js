import Vue from "vue";
import router from "ROOT/router";

import App from "ROOT/App";

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
