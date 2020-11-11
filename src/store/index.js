import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { stateCount: 100 },
  mutations: {
    incrementStateCount(state) {
      state.stateCount++;
    },
  },
  actions: {},
  modules: {},
});
