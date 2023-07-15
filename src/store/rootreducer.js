import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/Products.reducer";
import cartSlice from "./reducers/cart.reducer";
import searchSlice from "./reducers/Search.reducer";

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  products: productSlice.reducer,
  search: searchSlice.reducer,
});
const store = configureStore({ reducer: rootReducer });

export default store;
