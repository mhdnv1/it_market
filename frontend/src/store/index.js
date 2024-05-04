import { configureStore } from "@reduxjs/toolkit";
import burgerMenuSlice from "./burgerMenuSlice";
import { categoriesApi } from "./categories";
import categoriesSlice from "./categoriesSlice";
import { productsApi } from "./product";
import productSlice from "./productSlice";

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    product: productSlice,
    burger: burgerMenuSlice,
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware, categoriesApi.middleware),
});

export default store;
