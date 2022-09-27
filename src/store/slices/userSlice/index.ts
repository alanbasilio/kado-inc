import { createSlice } from "@reduxjs/toolkit";
import {
  registerUser,
  userLogin,
  forgotPassword,
  updatePassword,
} from "./userActions";

export interface User {
  id: number;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  image_url_google: string | null;
  image: string | null;
  google_id: string | null;
  phone_number: string | null;
  status: string | null;
  is_reset_password: number;
  createdAt: string;
  updatedAt: string;
  Profile: {
    id: number;
    name: string | null;
    phone_number_company: string | null;
    location: string | null;
    website: string | null;
    intro_yourself: string | null;
    any_additional_comments: string | null;
    description: string | null;
    vip_code: string | null;
    user_id: number;
    account_id: number;
    createdAt: string;
    updatedAt: string;
    AccountType: {
      id: number;
      name: string;
    };
  };
  userType: string;
}

export interface InitialState {
  loading: boolean;
  userInfo: User | null;
  userToken: string | null;
  error: string | null;
  success: boolean;
}

const initialState: InitialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.loading = false;
      state.userInfo = null;
      state.userToken = null;
      state.error = null;
    },
  },
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload.data;
      state.userToken = payload.token;
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state) => {
      state.loading = false;
      state.success = true;
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // forgot password
    [forgotPassword.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [forgotPassword.fulfilled]: (state) => {
      state.loading = false;
      state.success = true;
    },
    [forgotPassword.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // update password
    [updatePassword.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [updatePassword.fulfilled]: (state) => {
      state.loading = false;
      state.success = true;
    },
    [updatePassword.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
