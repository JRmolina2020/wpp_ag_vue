import Vue from "vue";
import Vuex from "vuex";
import graphqlClient from "../utils/graphql";
import gql from "graphql-tag";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    customers: [],
  },
  mutations: {
    Customermutations(state, response) {
      state.customers = response;
    },
  },
  actions: {
    async Customeractions({ commit }) {
      const response = await graphqlClient.query({
        query: gql`
          query AllCustomerQuery {
            customers {
              id
              name
              phone
            }
          }
        `,
      });
      commit("Customermutations", response.data.customers);
    },
  },
});
