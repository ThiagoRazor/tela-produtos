import { createStore } from 'vuex';

export default createStore({
  state: {
    userId: null,
  },
  mutations: {
    setUserId(state, userId) {
      state.userId = userId;
    },
  },
  actions: {
    setUserId({ commit }, userId) {
      commit('setUserId', userId);
    },
  },
  modules: {
    // Se você tiver módulos, pode adicioná-los aqui
  },
});