import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://63ac4406da81ba97617f073c.mockapi.io/" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `devices`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
