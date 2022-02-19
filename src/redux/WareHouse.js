import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

// to get the all the product initailly.
export const getAllProducts = createAsyncThunk(
  "warehouse/getAllProducts",
  async () => {
    const { data } = await Axios.get("https://fakestoreapi.com/products");
    return data;
  }
);
// to get the all the product category.
export const getAllCategory = createAsyncThunk(
  "warehouse/getAllCategory",
  async () => {
    const { data } = await Axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    return data;
  }
);

const initialState = {
  products: {
    productList: [],
    productsStatus: null,
  },
  categories: {
    categoriesList: [],
    categoriesStatus: null,
  },
};

const warehouseSlice = createSlice({
  name: "warehouse",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.products.productsStatus = "loading";
    },
    [getAllProducts.fulfilled]: (state, { payload }) => {
      state.products.productList = payload;
      state.products.productsStatus = "success";
    },
    [getAllProducts.rejected]: (state) => {
      state.products.productsStatus = "failed";
    },
    [getAllCategory.pending]: (state) => {
      state.categories.categoriesStatus = "loading";
    },
    [getAllCategory.fulfilled]: (state, { payload }) => {
      state.categories.categoriesList = payload;
      state.categories.categoriesStatus = "success";
    },
    [getAllCategory.rejected]: (state) => {
      state.categories.categoriesStatus = "failed";
    },
  },
});

export const warehouseSliceAction = warehouseSlice.actions;
export default warehouseSlice;
