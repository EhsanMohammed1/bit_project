import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Redux/Productslice";
import { ProductsApi } from "./Redux/ProductApi";
import CardReducer, { getTotal } from "./Redux/CardSlice";
import AuthReducer, { loadUser } from "./Redux/AuthSlice";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    card: CardReducer,
    auth: AuthReducer,
    [ProductsApi.reducerPath]: ProductsApi.reducer,
    
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductsApi.middleware),
});
store.dispatch(getTotal());
store.dispatch(loadUser(null));
