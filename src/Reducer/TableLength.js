import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const initialState = {
  length: 8,
};

export const TableLengthSlice = createSlice({
  name: "tableLength",
  initialState,
  reducers: {
    lengthEdit: (state, action) => {
      state.length = action.payload;
    },
  },
});

export const { lengthEdit } = TableLengthSlice.actions;
export default TableLengthSlice.reducer;

export const fetchInitialValues = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, "TableLength"));
    const newData = querySnapshot.docs.map((doc) => doc.data().data);
    dispatch(lengthEdit(newData));
  } catch (error) {
    console.error("Error fetching values:", error);
  }
};
