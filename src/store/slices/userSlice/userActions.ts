import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "@/services";
import swal from "sweetalert";

export interface UserData {
  email: number;
  password: number;
}

export const userLogin = createAsyncThunk(
  "user/signin",
  async ({ email, password }: UserData, { rejectWithValue }) => {
    try {
      const { data } = await API.post("user/authenticate", { email, password });

      return data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        swal("Error", error.response.data.message, "error");
        return rejectWithValue(error.response.data.message);
      } else {
        swal("Error", error.message, "error");
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/signup",
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
      if (error.response && error.response.data.message) {
        swal("Error", error.response.data.message, "error");
        return rejectWithValue(error.response.data.message);
      } else {
        swal("Error", error.message, "error");
        return rejectWithValue(error.message);
      }
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
      if (error.response && error.response.data.message) {
        swal("Error", error.response.data.message, "error");
        return rejectWithValue(error.response.data.message);
      } else {
        swal("Error", error.message, "error");
        return rejectWithValue(error.message);
      }
    }
  }
);

export const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async (payload, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${payload.token}`,
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
      if (error.response && error.response.data.message) {
        swal("Error", error.response.data.message, "error");
        return rejectWithValue(error.response.data.message);
      } else {
        swal("Error", error.message, "error");
        return rejectWithValue(error.message);
      }
    }
  }
);
