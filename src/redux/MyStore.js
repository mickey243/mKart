import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice";
import ProductCategorySlice from "./ProductCategoty";

const MyState = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    productCategoryStore: ProductCategorySlice.reducer,
  },
});

export default MyState;
