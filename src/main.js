// 1
import Vue from "vue";
import App from "./App";
import router from "./router";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import SmartTable from "vuejs-smart-table";
import store from "./store";
import VueSweetalert2 from "vue-sweetalert2";
Vue.use(VueSweetalert2);
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(SmartTable);
import VueApollo from "vue-apollo";
import ApolloClient from "./utils/graphql";
Vue.use(VueApollo);
const apolloProvider = new VueApollo({
  defaultClient: ApolloClient,
});

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  store,
  router,
  apolloProvider,
  render: (h) => h(App),
});
