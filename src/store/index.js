import { createStore } from "vuex";

export default createStore({
  state: {
    SideBarCollapsed: false,
  },
  getters: {},
  mutations: {
    ToggleSideBar(state) {
      state.SideBarCollapsed = !state.SideBarCollapsed;
    },
  },
  actions: {},
  modules: {},
});
