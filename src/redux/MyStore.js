import { configureStore } from "@reduxjs/toolkit";
import allProductStoreSlice from "./AllProductStore";
import AuthSlice from "./AuthSlice";
import ProductCategorySlice from "./ProductCategoty";
import productCartSlice from "./ProductStore";
import warehouseSlice from "./WareHouse";

const MyState = configureStore(
  {
    reducer: {
      auth: AuthSlice.reducer,
      productCategoryStore: ProductCategorySlice.reducer,
      productStore: productCartSlice.reducer,
      allProductStoreSlice: allProductStoreSlice.reducer,
      warehouse: warehouseSlice.reducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default MyState;
