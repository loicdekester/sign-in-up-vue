//import ApiService from "@/common/service/api";
import {
  FETCH_START,
  FETCH_END,
} from "./mutations.type";

const state = {
  isLoading: true
};

const getters = {
  isLoading(state) {
    return state.isLoading;
  },
};

const actions = {

};

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  [FETCH_START](state) {
    state.isLoading = true;
  },
  [FETCH_END](state) {
    state.isLoading = false;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};
