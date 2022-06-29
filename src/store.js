import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    colors: [],
    pickedColor: "",
    restartButton: "New Colors!",
    colorCount: 6,
    isHard: true,
    messageDisplay: "",
    headerStyleBackgroundColor: "steelblue",
  },
  actions: {
    setColors({ commit }, colors) {
      commit("refreshColors", colors);
    },
    setPickedColor({ commit }, color) {
      commit("refreshPickedColor", color);
    },
    setRestartButton({ commit }, text) {
      commit("refreshRestartButton", text);
    },
    handlerClickEasy({ commit }, [colorCount, isHard]) {
      commit("refreshColorCount", colorCount);
      commit("refreshIsHard", isHard);
    },
    handlerClickHard({ commit }, [colorCount, isHard]) {
      commit("refreshColorCount", colorCount);
      commit("refreshIsHard", isHard);
    },
    setMessageDisplay({ commit }, text) {
      commit("refreshMessageDisplay", text);
    },
    setHeaderStyleBackgroundColor({ commit }, color) {
      commit("refreshHeaderStyleBackgroundColor", color);
    },
  },
  mutations: {
    refreshColors(state, value) {
      state.colors = value;
    },
    refreshPickedColor(state, value) {
      state.pickedColor = value;
    },
    refreshRestartButton(state, value) {
      state.restartButton = value;
    },
    refreshColorCount(state, value) {
      state.colorCount = value;
    },
    refreshIsHard(state, value) {
      state.isHard = value;
    },
    refreshMessageDisplay(state, value) {
      state.messageDisplay = value;
    },
    refreshHeaderStyleBackgroundColor(state, value) {
      state.headerStyleBackgroundColor = value;
    },
  },
});
