import { store } from "@/store";

const UseProjects = () => {
  const state = store.getState();
  return state.projects;
};

export default UseProjects;
