import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { queryCustomer } from "@/graphql/querys-consult";
import { uri } from "@/graphql/config";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    customers: [],
    products:[],
    paymnets:[],
    orders:[],
    orders_details:[],
    url: uri,
  },
  mutations: {
    Categorymutations(state, response) {
      state.categories = response;
    },
    Customermutations(state, response) {
      state.customers = response;
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

    async Productactions({ commit, state }) {
      axios({
        url: state.url,
        method: "post",
        data: {
          query: queryProduct,
        },
      }).then((result) => {
        commit("Productmutations", result.data.data.products);
      });
    },
  },
});
