import { createStore } from "vuex";

export default createStore({
  state: {
    SideBarCollapsed: false,
    projects: []
  },
  getters: {},
  mutations: {
    ToggleSideBar(state) {
      state.SideBarCollapsed = !state.SideBarCollapsed;
    },
    UpdateProjects(state, projects){
      state.projects = projects
    }
  },
  actions: {
    GetProjects(){
      this.commit("UpdateProjects", [])
      fetch("https://gitlab.com/api/v4/projects")
      .then((response) => response.json())
      .then((projects) => this.commit("UpdateProjects", projects))
      .catch(e=>console.log(e))
    }
  },
  modules: {},
});
