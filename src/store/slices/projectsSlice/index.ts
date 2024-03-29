import { createSlice } from "@reduxjs/toolkit";
import {
  getAllProjects,
  getMyProjects,
  getProject,
  getCities,
  getCompanies,
  getSkills,
  newProject,
  getCategories,
  studentApply,
  getBookmarks,
  getNotify,
} from "./projectsActions";

const initialState = {
  loading: false,
  myProjects: null,
  projects: null,
  companies: [],
  skills: [],
  cities: [],
  notify: [],
  categories: [],
  bookmarks: [],
  error: null,
  success: false,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    clearProjects: (state) => {
      state.loading = false;
      state.myProjects = null;
      state.projects = null;
      state.error = null;
    },
  },
  extraReducers: {
    // my projects
    [getMyProjects.pending]: (state) => {
      // state.loading = true;
      state.error = null;
    },
    [getMyProjects.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.myProjects = payload;
    },
    [getMyProjects.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // all projects
    [getAllProjects.pending]: (state) => {
      // state.loading = true;
      state.error = null;
    },
    [getAllProjects.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.projects = payload;
    },
    [getAllProjects.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // single projects
    [getProject.pending]: (state) => {
      // state.loading = true;
      state.error = null;
    },
    [getProject.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.project = payload.data[0];
    },
    [getProject.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // new project
    [newProject.pending]: (state) => {
      // state.loading = true;
      state.error = null;
    },
    [newProject.fulfilled]: (state, { payload }) => {
      state.loading = false;
    },
    [newProject.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // get cities
    [getCities.pending]: (state) => {
      // state.loading = true;
      state.error = null;
    },
    [getCities.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.cities = payload;
    },
    [getCities.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // get cities
    [getCompanies.pending]: (state) => {
      // state.loading = true;
      state.error = null;
    },
    [getCompanies.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.companies = payload;
    },
    [getCompanies.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // get kills
    [getSkills.pending]: (state) => {
      // state.loading = true;
      state.error = null;
    },
    [getSkills.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.skills = payload;
    },
    [getSkills.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // get notify
    [getNotify.pending]: (state) => {
      // state.loading = true;
      state.error = null;
    },
    [getNotify.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.notify = payload;
    },
    [getNotify.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // get categories
    [getCategories.pending]: (state) => {
      // state.loading = true;
      state.error = null;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.categories = payload.data;
    },
    [getCategories.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // student apply
    [studentApply.pending]: (state) => {
      // state.loading = true;
      state.error = null;
    },
    [studentApply.fulfilled]: (state) => {
      state.loading = false;
    },
    [studentApply.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // student apply
    [getBookmarks.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getBookmarks.fulfilled]: (state) => {
      state.bookmarks = payload;
      state.loading = false;
    },
    [getBookmarks.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { clearProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
