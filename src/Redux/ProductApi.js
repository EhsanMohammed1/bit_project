import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  endpoints: (builder) => ({
    GetallProducts: builder.query({
      query: () => "products",
    }),
  }),
});

export const { useGetallProductsQuery } = ProductsApi;
