import { applyMiddleware, combineReducers, createStore } from "redux";
import { cartReducer } from "./reducers/cart.reducer";
import products_api_reducer from "./reducers/Products_reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cart: cartReducer,
  products_api_data: products_api_reducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
