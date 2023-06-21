import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/Products.reducer";
import cartSlice from "./reducers/cart.reducer";

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  products: productSlice.reducer,
});
const store = configureStore({ reducer: rootReducer });

export default store;
