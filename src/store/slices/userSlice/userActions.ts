import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "@/services";
import swal from "sweetalert";

export interface UserData {
  email: number;
  password: number;
}

export const userLogin = createAsyncThunk(
  "user/userLogin",
  async ({ email, password }: UserData, { rejectWithValue }) => {
    try {
      const { data } = await API.post("user/authenticate", { email, password });

      return data;
    } catch (error: any) {
      swal("Error", error?.response?.data?.message || error?.message, "error");
      return rejectWithValue(error?.response?.data?.message || error?.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.post("user", payload);

      if (payload.account_id === 2) {
        swal(
          "Success",
          "Our Partner Relations Team will be in touch soon!",
          "success"
        ).then(function () {
          window.location.replace("/");
        });
      }

      if (payload.account_id === 3) {
        swal(
          "Success",
          "Now you are in the waiting list. We will contact you very soon.",
          "success"
        ).then(function () {
          window.location.replace("/");
        });
      }

      return data;
    } catch (error: any) {
      swal("Error", error?.response?.data?.message || error?.message, "error");
      return rejectWithValue(error?.response?.data?.message || error?.message);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "user/forgotPassword",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/user/forgot-password", payload);

      window.location.replace("/signin/email-sent");

      return data;
    } catch (error: any) {
      swal("Error", error?.response?.data?.message || error?.message, "error");
      return rejectWithValue(error?.response?.data?.message || error?.message);
    }
  }
);

export const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async (payload, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${user?.userToken}`,
        },
      };

      const { data } = await API.post("/user/update-password", payload, config);

      swal("Success", "Your password was updated.", "success").then(
        function () {
          window.location.replace("/signin");
        }
      );

      return data;
    } catch (error: any) {
      swal("Error", error?.response?.data?.message || error?.message, "error");
      return rejectWithValue(error?.response?.data?.message || error?.message);
    }
  }
);

export const uploadBase64 = createAsyncThunk(
  "profile/upload-single-base64",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/profile/upload-single-base64", payload);

      return data;
    } catch (error: any) {
      swal("Error", error?.response?.data?.message || error?.message, "error");
      return rejectWithValue(error?.response?.data?.message || error?.message);
    }
  }
);
