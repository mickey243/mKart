import { createSlice } from "@reduxjs/toolkit";
import jsonData from "./DataFromAPIManually";

const initialState = {
  allProduct: jsonData,
};

const allProductStoreSlice = createSlice({
  name: "allProductStore",
  initialState: initialState,
  reducers: {
    addProductHandler(state, action) {
      state.allProduct = [action.payload];
    },
  },
});

export const allProductStoreSliceAction = allProductStoreSlice.actions;
export default allProductStoreSlice;
