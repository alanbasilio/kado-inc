import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "@/services";
import swal from "sweetalert";
import { IsCompany, IsSchool, IsStudent } from "@/utils/profileType";

export interface NewProjectData {
  user_id: number;
  company_organization_id: number;
  project_title_role: string;
  project_description: string;
  job_skill_ids: [number];
  paid: boolean;
  duration_hours_week: number;
  start_date: string;
  due_date: string;
  project_requeriments: string;
  notify_project_following_user_ids: [number];
  location_remote: boolean;
  location_city_id: number;
  expiration_date: string;
  require_resume: boolean;
  request_additional_documents: boolean;
  icon: string;
  base64Image: string;
}

export interface StudentApplyProps {
  user_id: number;
  project_id: number;
  proposed_compensation: string;
  cover_letter: string;
}

export const getAllProjects = createAsyncThunk(
  "projects/getAllProjects",
  async (payload, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${user?.userToken}`,
        },
      };

      const { data } = await API.get("projects", config);

      return data;
    } catch (error: any) {
      swal("Error", error?.response?.data?.message || error?.message, "error");
      return rejectWithValue(error?.response?.data?.message || error?.message);
    }
  }
);

export const getMyProjects = createAsyncThunk(
  "projects/getMyProjects",
  async (payload, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${user?.userToken}`,
        },
      };

      let profile;

      if (IsStudent()) {
        profile = "student";
      }

      if (IsCompany()) {
        profile = "company";
      }

      if (IsSchool()) {
        profile = "school";
      }

      const { data } = await API.get(
        `projects/user/${profile}/${user?.userInfo?.id}`,
        config
      );

      return data;
    } catch (error: any) {
      swal("Error", error?.response?.data?.message || error?.message, "error");
      return rejectWithValue(error?.response?.data?.message || error?.message);
    }
  }
);

export const getProject = createAsyncThunk(
  "projects/getProject",
  async (payload, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${user?.userToken}`,
        },
      };

      const { data } = await API.get(`project/${payload.id}/details`, config);

      return data;
    } catch (error: any) {
      swal("Error", error?.response?.data?.message || error?.message, "error");
      return rejectWithValue(error?.response?.data?.message || error?.message);
    }
  }
);

export const newProject = createAsyncThunk(
  "projects/newProject",
  async (payload: NewProjectData, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${user?.userToken}`,
        },
      };

      const { data } = await API.post(`project`, payload, config);

      swal("Success", "Project Created with success!", "success").then(() => {
        window.location.replace("/my-projects");
      });

      return data;
    } catch (error: any) {
      swal("Error", error?.response?.data?.message || error?.message, "error");
      return rejectWithValue(error?.response?.data?.message || error?.message);
    }
  }
);

export const getSkills = createAsyncThunk(
  "projects/getSkills",
  async (payload, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${user?.userToken}`,
        },
      };

      const { data } = await API.get("job-skills", config);

      const AllSkills = data.data.map((result) => {
        return {
          value: result.id,
          label: result.label,
        };
      });

      return AllSkills;
    } catch (error: any) {
      swal("Error", error?.response?.data?.message || error?.message, "error");
      return rejectWithValue(error?.response?.data?.message || error?.message);
    }
  }
);

export const getCompanies = createAsyncThunk(
  "projects/getCompanies",
  async (payload, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${user?.userToken}`,
        },
      };

      const { data } = await API.get("companies-organizations", config);

      const AllCompanies = data.data.map((result) => {
        return {
          value: result.id,
          label: result.name,
        };
      });

      return AllCompanies;
    } catch (error: any) {
      swal("Error", error?.response?.data?.message || error?.message, "error");
      return rejectWithValue(error?.response?.data?.message || error?.message);
    }
  }
);

export const getCities = createAsyncThunk(
  "projects/getCities",
  async (payload, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${user?.userToken}`,
        },
      };

      const { data } = await API.get("cities", config);

      const AllCities = data.data.map((result) => {
        return {
          value: result.id,
          label: result.city,
        };
      });

      return AllCities;
    } catch (error: any) {
      swal("Error", error?.response?.data?.message || error?.message, "error");
      return rejectWithValue(error?.response?.data?.message || error?.message);
    }
  }
);

export const getCityByName = createAsyncThunk(
  "projects/getCityByName",
  async (payload, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${user?.userToken}`,
        },
      };

      const { data } = await API.get(`city/${payload.name}`, config);

      return data;
    } catch (error: any) {
      swal("Error", error?.response?.data?.message || error?.message, "error");
      return rejectWithValue(error?.response?.data?.message || error?.message);
    }
  }
);

export const getNotify = createAsyncThunk(
  "projects/getNotify",
  async (payload, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${user?.userToken}`,
        },
      };

      const { data } = await API.get("notify-project-following-users", config);

      return data;
    } catch (error: any) {
      swal("Error", error?.response?.data?.message || error?.message, "error");
      return rejectWithValue(error?.response?.data?.message || error?.message);
    }
  }
);

export const getCategories = createAsyncThunk(
  "projects/getCategories",
  async (payload, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${user?.userToken}`,
        },
      };

      const { data } = await API.get("categories", config);

      return data;
    } catch (error: any) {
      swal("Error", error?.response?.data?.message || error?.message, "error");
      return rejectWithValue(error?.response?.data?.message || error?.message);
    }
  }
);

export const studentApply = createAsyncThunk(
  "projects/studentApply",
  async (payload: StudentApplyProps, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${user?.userToken}`,
        },
      };

      const { data } = await API.post("student-apply-project", payload, config);

      swal("Success", data.message, "success").then(() =>
        window.location.replace("/my-projects")
      );

      return data;
    } catch (error: any) {
      swal("Error", error?.response?.data?.message || error?.message, "error");
      return rejectWithValue(error?.response?.data?.message || error?.message);
    }
  }
);

export const setBookmark = createAsyncThunk(
  "projects/setBookmark",
  async (payload, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${user?.userToken}`,
        },
      };

      let profile;

      if (IsStudent()) {
        profile = "student";
      }

      if (IsCompany()) {
        profile = "company";
      }

      if (IsSchool()) {
        profile = "school";
      }

      const { data } = await API.put(
        `${profile}/project/${payload.id}/favorite`,
        payload.data,
        config
      );

      swal("Success", "The project was bookmarked", "success");

      return data;
    } catch (error: any) {
      swal("Error", error?.response?.data?.message || error?.message, "error");
      return rejectWithValue(error?.response?.data?.message || error?.message);
    }
  }
);

export const getBookmarks = createAsyncThunk(
  "projects/getBookmarks",
  async (payload, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${user?.userToken}`,
        },
      };

      let profile;

      if (IsStudent()) {
        profile = "student";
      }

      if (IsCompany()) {
        profile = "company";
      }

      if (IsSchool()) {
        profile = "school";
      }

      const { data } = await API.get(`/bookmarks`, config);

      return data;
    } catch (error: any) {
      swal("Error", error?.response?.data?.message || error?.message, "error");
      return rejectWithValue(error?.response?.data?.message || error?.message);
    }
  }
);
