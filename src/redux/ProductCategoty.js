import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  anyCategory: "",
  isAnyCategory: false,
};
const ProductCategorySlice = createSlice({
  name: "productCategoryStore",
  initialState: initialState,
  reducers: {
    addCategory(state, action) {
      state.anyCategory = action.payload;
      state.isAnyCategory = true;
    },
    removeCategory(state) {
      state.isAnyCategory = false;
    },
  },
});

export const productCategorySliceAction = ProductCategorySlice.actions;
export default ProductCategorySlice;
