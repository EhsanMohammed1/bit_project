import { configureStore } from "@reduxjs/toolkit";
import ProductReducer, { productFetch } from "./Redux/Productslice";
import { ProductsApi } from "./Redux/ProductApi";
import CardReducer from "./Redux/CardSlice";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    card: CardReducer,
    [ProductsApi.reducerPath]: ProductsApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductsApi.middleware),
});
store.dispatch(productFetch());
