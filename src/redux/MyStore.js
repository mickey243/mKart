import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import ProductCategorySlice from "./ProductCategoty";
import productCartSlice from "./ProductStore";

const MyState = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    productCategoryStore: ProductCategorySlice.reducer,
    productStore: productCartSlice.reducer,
  },
});

export default MyState;
