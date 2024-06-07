import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggedIn: false,
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUserStart: (state) => {
      state.isLoading = true;
    },
    signUserSuccess: (state, action) => {
      state.isLoading = false;
      state.loggedIn = true;
    },
    signUserFailure: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    logOutUser: (state) => {
      state.isLoading = true;
      state.loggedIn = false;
    },
  },
});

export const { signUserStart, signUserSuccess, signUserFailure, logOutUser } =
  authSlice.actions;
export default authSlice.reducer;
