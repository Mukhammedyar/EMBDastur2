import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errors11: false,
  errors12: false,
  errors13: false,
  errors14: false,
  errors15: false,
  errors16: false,
  errors17: false,
  errors18: false,
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    error11True: (state) => {
      state.errors11 = true;
    },
    error12True: (state) => {
      state.errors12 = true;
    },
    error13True: (state) => {
      state.errors13 = true;
    },
    error14True: (state) => {
      state.errors14 = true;
    },
    error15True: (state) => {
      state.errors15 = true;
    },
    error16True: (state) => {
      state.errors16 = true;
    },
    error17True: (state) => {
      state.errors17 = true;
    },
    error18True: (state) => {
      state.errors18 = true;
    },
    error11False: (state) => {
      state.errors11 = false;
    },
    error12False: (state) => {
      state.errors12 = false;
    },
    error13False: (state) => {
      state.errors13 = false;
    },
    error14False: (state) => {
      state.errors14 = false;
    },
    error15False: (state) => {
      state.errors15 = false;
    },
    error16False: (state) => {
      state.errors16 = false;
    },
    error17False: (state) => {
      state.errors17 = false;
    },
    error18False: (state) => {
      state.errors18 = false;
    },
  },
});

export const {
  error11True,
  error12True,
  error13True,
  error14True,
  error15True,
  error16True,
  error17True,
  error18True,
  error11False,
  error12False,
  error13False,
  error14False,
  error15False,
  error16False,
  error17False,
  error18False,
} = errorSlice.actions;
export default errorSlice.reducer;
