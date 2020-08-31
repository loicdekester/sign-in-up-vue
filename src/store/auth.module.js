import ApiService from "@/common/service/api";
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  FETCH_USER
} from "./actions.type";
import { SET_AUTH, PURGE_AUTH, SET_USER, SET_ERROR } from "./mutations.type";

const state = {
  errors: null,
  user: {},
  isAuthenticated: false
};

const getters = {
  user(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("users/login", { email: credentials.email, password: credentials.password })
        .then(() => {
          context.dispatch(FETCH_USER);
          context.commit(SET_AUTH);
          resolve();
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    });
  },
  [LOGOUT](context) {
    return new Promise(resolve => {
      ApiService.get("auth/logout")
        .then(() => {
          context.commit(PURGE_AUTH);
          resolve();
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
        });
    });

  },
  [REGISTER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post("users", { user: credentials })
        .then(({ data }) => {
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
          reject(response);
        });
    });
  },
  [CHECK_AUTH](context) {
    if (!state.isAuthenticated) {
      ApiService.get("auth/ping")
        .then(() => {
          context.commit(SET_AUTH);
        })
        .catch((response) => {
          context.commit(SET_ERROR, response);
          context.commit(PURGE_AUTH);
        });
    }
  },
  [FETCH_USER](context) {
    return new Promise((resolve, reject) => {
      return ApiService.get("users")
        .then(({ data }) => {
          context.commit(SET_USER, data.user);
          return data;
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
          reject(response);
        });
    });
  },
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state) {
    state.isAuthenticated = true;
    state.errors = {};
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
  },
  [SET_USER](state, user) {
    state.user = user;
    state.errors = {};
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
