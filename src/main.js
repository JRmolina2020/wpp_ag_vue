// 1
import Vue from "vue";
import App from "./App";
import router from "./router";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import SmartTable from "vuejs-smart-table";
import store from "./store";
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
