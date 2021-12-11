import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    breweries: []
  },
  mutations: {
    update_breweries(state, payload) {
      state.breweries = payload;
    }
  },
  actions: {
    get_breweries_from_api(store) {
      axios.request({
        url: "https://api.openbrewerydb.org/breweries",
      }).then((response) => {
        store.commit('update_breweries', response.data);
        console.log(response.data);
      }).catch((error) => {
        error;
      })
    },
  },
})
