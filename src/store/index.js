import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogged: false
  },
  getters: {},
  mutations: {
    UPDATE_LOGIN(state, isLogin) {
      console.log(isLogin);
      state.isLogged = isLogin;
    }
  },
  actions: {
    updateUser({ commit }, userValidate) {
      commit("UPDATE_LOGIN", userValidate);
    }
  }
});
