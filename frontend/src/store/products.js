import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
    }),
    getCategories: builder.query({
      query: () => `categories`,
    }),
    getProduct: builder.query({
      query: (id='') => `products/${id}`,
    }),
  }),
});



export const { useGetProductsQuery, useGetCategoriesQuery, useGetProductQuery} = productsApi;