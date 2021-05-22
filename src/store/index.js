import Vue from "vue";
import Vuex from "vuex";
import Tabletop from 'tabletop'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: {},
  },
  mutations: {
    setData(state, data) {
      state.data = data
    }
  },
  getters: {
    getData(state) {
      return state.data
    }
  },
  actions: {
    pullData({commit}) {
      Tabletop.init({
        key: process.env.VUE_APP_SPREADSHEET_URL,
        simpleSheet: true,
      })
      .then((data) => {
        console.log(data)
        commit('setData', data[0])
      })
      .catch((err) => console.log(err))
    },
  }
});
