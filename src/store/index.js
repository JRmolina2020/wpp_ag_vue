import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { queryCustomer, queryPayment } from "@/graphql/querys-consult";
import { uri } from "@/graphql/config";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    customers: [],
    products: [],
    payments: [],
    orders: [],
    orders_details: [],
    url: uri,
  },
  mutations: {
    Customermutations(state, response) {
      state.customers = response;
    },
    Paymentmutations(state, response) {
      state.payments = response;
    },
  },
  actions: {
    async Customeractions({ commit, state }) {
      axios({
        url: state.url,
        method: "post",
        data: {
          query: queryCustomer,
        },
      }).then((result) => {
        commit("Customermutations", result.data.data.customers);
      });
    },
    async Paymentactions({ commit, state }) {
      axios({
        url: state.url,
        method: "post",
        data: {
          query: queryPayment,
        },
      }).then((result) => {
        commit("Paymentmutations", result.data.data.payments);
      });
    },
  },
});
