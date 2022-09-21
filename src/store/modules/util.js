// import { getStarknet } from "@argent/get-starknet";
// import { stark } from "starknet";
// const getSelectorFromName = stark.getSelectorFromName;

const state = {
  utilPane: 1,
};

const getters = {
  utilPane: (state) => state.utilPane,
};

const actions = {};

const mutations = {
  setUtilPane(state, pane) {
    state.utilPane = pane;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
