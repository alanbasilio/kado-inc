import { configureStore } from "@reduxjs/toolkit";
import signinSlice from "./modules/auth";

export const store = configureStore({
  reducer: {
    signin: signinSlice,
  },
});
