import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalAmount: 0,
  totalProductCount: 0,
  products: [
    {
      title: "new product",
      price: 100,
      quantity: 0,
    },
  ],
};
const productCartSlice = createSlice({
  name: "prductSlice",
  initialState: initialState,
  reducers: {
    addProductToCart(state, action) {
      state.totalProductCount = state.totalProductCount + 1;
    },
    removeProductFromCart(state, action) {},
  },
});

export const productCartSliceAction = productCartSlice.actions;
export default productCartSlice;
