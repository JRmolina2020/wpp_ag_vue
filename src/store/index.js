import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { queryCustomer, queryPayment,  queryCategory, queryProduct } from "@/graphql/querys-consult";
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
    editing: false,
  },
  mutations: {
    Customermutations(state, response) {
      state.customers = response;
    },
    Paymentmutations(state, response) {
      state.payments = response;
    },
    Categorymutations(state, response) {
      state.categories = response;
    },
    Productmutations(state, response) {
      state.products = response;
    },
    handleEditMutation(state, response) {
      state.editing = response;
    }

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
    async Categoryactions({ commit, state }) {
      axios({
        url: state.url,
        method: "post",
        data: {
          query: queryCategory,
        },
      }).then((result) => {
        commit("Categorymutations", result.data.data.categories);
      });
    },

    async Productactions({ commit, state }) {
      axios({
        url: state.url,
        method: "post",
        data: {
          query: queryProduct,
        },
      }).then((result) => {
        commit("Productmutations", result.data.data?.products);
      });
    },

    async handleEditAction({ commit, state }) {
      state.editing = !state.editing;
      commit("handleEditMutation", state.editing);
    },
  },
});
