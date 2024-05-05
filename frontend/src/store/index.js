import { configureStore } from "@reduxjs/toolkit";
import burgerMenuSlice from "./burgerMenuSlice";
import { productsApi } from "./products";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    search: searchSlice,
    burger: burgerMenuSlice,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export default store;
