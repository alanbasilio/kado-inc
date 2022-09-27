import { store } from "@/store";

const UseUser = () => {
  const state = store.getState();
  return state.user;
};

export default UseUser;
