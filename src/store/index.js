import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // variable to store breweries as an array of objects
    breweries: []
  },
  mutations: {
    // update function for breweries
    update_breweries(state, payload) {
      state.breweries = payload;
    }
  },
  actions: {
    // axios request
    get_breweries_from_api(store) {
      axios.request({
        url: "https://api.openbrewerydb.org/breweries",
      }).then((response) => {
        // store request in variable 'breweries' by calling update_breweries function
        store.commit('update_breweries', response.data);
      }).catch((error) => {
        error;
      })
    },
  },
})
