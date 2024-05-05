import { configureStore } from "@reduxjs/toolkit";
import burgerMenuSlice from "./burgerMenuSlice";
import categoriesSlice from "./categoriesSlice";
import { productsApi } from "./products";
import productSlice from "./productSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    product: productSlice,
    search: searchSlice,
    burger: burgerMenuSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
