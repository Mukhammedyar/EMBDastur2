import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  tigizQoldiq: [],
  valuesResult: [],
  tigizQoldiqJami: [],
  valuesResultJami: 0,
  jamiQiymatlar: [], //pastki jami qiymatlar
  tip: [],
  shorYuvish: [],
  shorlanishDarajasi: "",
  tipPerList3: [],
  error: null,
};

export const value3Slice = createSlice({
  name: "values3",
  initialState,
  reducers: {
    calculsStart: (state) => {
      state.isLoading = true;
    },
    tigizQoldiqSuccess: (state, action) => {
      state.isLoading = false;
      state.tigizQoldiq = action.payload;
    },
    valuesResultSuccess: (state, action) => {
      state.isLoading = false;
      state.valuesResult = action.payload;
    },
    tigizQoldiqJamiSuccess: (state, action) => {
      state.isLoading = false;
      state.tigizQoldiqJami = action.payload;
    },
    valuesResultJamiSuccess: (state, action) => {
      state.isLoading = false;
      state.valuesResultJami = action.payload;
    },
    tipSuccess: (state, action) => {
      state.isLoading = false;
      state.tip = action.payload;
    },
    tipPerList3Success: (state, action) => {
      state.isLoading = false;
      state.tipPerList3 = action.payload;
    },
    jamiQiymatlarSuccess: (state, action) => {
      state.isLoading = false;
      state.jamiQiymatlar = action.payload;
    },
    shorYuvishSuccess: (state, action) => {
      state.isLoading = false;
      state.shorYuvish = action.payload;
    },
    shorlanishDarajasiSuccess: (state, action) => {
      state.isLoading = false;
      state.shorlanishDarajasi = action.payload;
    },
  },
});

export const {
  calculsStart,
  tigizQoldiqSuccess,
  valuesResultSuccess,
  tigizQoldiqJamiSuccess,
  valuesResultJamiSuccess,
  tipSuccess,
  tipPerList3Success,
  jamiQiymatlarSuccess,
  shorYuvishSuccess,
  shorlanishDarajasiSuccess,
} = value3Slice.actions;
export default value3Slice.reducer;
