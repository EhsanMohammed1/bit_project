import { configureStore } from "@reduxjs/toolkit";
import ProductReducer, { productFetch } from "./Redux/Productslice";
import { ProductsApi } from "./Redux/ProductApi";
import CardReducer from "./Redux/CardSlice";
import totalReducer  from "./Redux/TotalSlice";

export const store = configureStore({
  reducer: {
    total: totalReducer,
    products: ProductReducer,
    card: CardReducer,
    [ProductsApi.reducerPath]: ProductsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductsApi.middleware),
});
store.dispatch(productFetch());
