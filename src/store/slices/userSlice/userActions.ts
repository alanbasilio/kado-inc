import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "@/services";

export interface UserData {
  email: number;
  password: number;
}

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }: UserData, { rejectWithValue }) => {
    try {
      const { data } = await API.post("user/authenticate", { email, password });

      return data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async (payload, { rejectWithValue }) => {
    try {
      await API.post("user/signup", payload);
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
