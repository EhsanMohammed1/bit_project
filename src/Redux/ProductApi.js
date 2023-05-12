import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProductsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:5000`,
  }),
  endpoints: (builder) => ({
    GetallProducts: builder.query({
      query: () => "products",
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetallProductsQuery, useGetProductByIdQuery } = ProductsApi;
