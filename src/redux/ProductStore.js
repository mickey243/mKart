import React, { useEffect } from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalAmount: 0,
  totalProductCount: 0,
  products: [],
};

const productCartSlice = createSlice({
  name: "prductSlice",
  initialState: initialState,
  reducers: {
    addProductToCart(state, action) {
      const newItem = action.payload;
      state.totalProductCount++;
      const existingItem = state.products.find(
        (item) => item.id === newItem.id
      );

      if (!existingItem) {
        state.products.push({
          id: newItem.id,
          title: newItem.title,
          quantity: 1,
          totalPrice: newItem.totalPrice,
          image: newItem.image,
          price: newItem.totalPrice,
        });
        state.totalAmount = state.totalAmount + newItem.totalPrice;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      }
    },
    removeProductFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.products.find((item) => item.id === id);
      state.totalProductCount--;
      if (existingItem.quantity === 1) {
        state.products = state.products.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
    checkOutStore(state) {
      state.totalAmount = 0;
      state.totalProductCount = 0;
      state.products = [];
    },
  },
});

export const productCartSliceAction = productCartSlice.actions;
export default productCartSlice;
