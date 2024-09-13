import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { useSelector } from "react-redux";
import { db } from "../config/firebase";

const initialState = {
  isLoading: true,
  values: [],
  fizikQum: [],
  fizikLoy: [],
  MexanikTarkib: [],
  jamiPercent: [],
  jamiNatiyja: [],
  error: null,
};

export const value1Slice = createSlice({
  name: "values1",
  initialState,
  reducers: {
    valueSetStart(state) {
      return { ...state, isLoading: true };
    },
    valueSetSuccess(state, action) {
      return { ...state, isLoading: false, values: action.payload };
    },
    valueSetFailure(state) {
      return { ...state, isLoading: true };
    },
    calculsStart(state) {
      return { ...state, isLoading: true };
    },
    fizikQumSuccess(state, action) {
      return { ...state, isLoading: false, fizikQum: action.payload };
    },
    fizikLoySuccess(state, action) {
      return { ...state, isLoading: false, fizikLoy: action.payload };
    },
    MexanikTarkibSuccess(state, action) {
      return { ...state, isLoading: false, MexanikTarkib: action.payload };
    },
    jamiPercentSuccess(state, action) {
      return { ...state, isLoading: false, jamiPercent: action.payload };
    },
    jamiNatiyjatSuccess(state, action) {
      return { ...state, isLoading: false, jamiNatiyja: action.payload };
    },
  },
});

export const {
  valueSetStart,
  valueSetSuccess,
  valueSetFailure,
  fizikQumSuccess,
  fizikLoySuccess,
  MexanikTarkibSuccess,
  calculsStart,
  jamiPercentSuccess,
  jamiNatiyjatSuccess,
} = value1Slice.actions;
export default value1Slice.reducer;
