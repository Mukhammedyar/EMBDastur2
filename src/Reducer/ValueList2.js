import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: true,
  valuesList2: [],
  natiyjaValues: [],
  tip: [],
  tipPer: [],
  error: null,
};

export const value2Slice = createSlice({
  name: "values2",
  initialState,
  reducers: {
    value2SetStart: (state) => {
      state.isLoading = true;
    },
    value2SetSuccess: (state, action) => {
      state.isLoading = false;
      state.valuesList2 = action.payload;
    },
    value2SetFailure: (state) => {
      state.isLoading = true;
    },
    calculsStart: (state) => {
      state.isLoading = true;
    },
    natiyjaValuesSuccess: (state, action) => {
      state.isLoading = false;
      state.natiyjaValues = action.payload;
    },
    tipSuccess: (state, action) => {
      state.isLoading = false;
      state.tip = action.payload;
    },
    tipPerSuccess: (state, action) => {
      state.isLoading = false;
      state.tipPer = action.payload;
    },
  },
});

export const {
  value2SetStart,
  value2SetSuccess,
  value2SetFailure,
  calculsStart,
  natiyjaValuesSuccess,
  tipSuccess,
  tipPerSuccess,
} = value2Slice.actions;
export default value2Slice.reducer;
