import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "./Redux/counterSlice";
import ProductReducer, { productFetch } from "./Redux/Productslice";
import { ProductsApi } from "./Redux/ProductApi";


export const store = configureStore({
  reducer: {
    products: ProductReducer,
    [ProductsApi.reducerPath]: ProductsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductsApi.middleware),
});
store.dispatch(productFetch());
/* state = {
  theme: {
    isDark: false
  }
} */
