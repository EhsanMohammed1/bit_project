import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "./Redux/counterSlice";
import ProductReducer, { productFetch } from "./Redux/Productslice";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
store.dispatch(productFetch());
/* state = {
  theme: {
    isDark: false
  }
} */
