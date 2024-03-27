import { configureStore } from "@reduxjs/toolkit";
import  productSlice from "./productSlice";
import { productsApi } from "./product";

const store = configureStore({
  reducer: {
    product:productSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
