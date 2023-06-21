import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.selectedItems.find(
        (item) => item.id === action.payload.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.selectedItems.push({
          id: action.payload.id,
          name: action.payload.wine,
          image: action.payload.image,
          price: +25,
          madeIn: action.payload.location,
          quantity: 1,
        });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        existingItem.price = existingItem.price + +25;
      }
    },
    removeFromCart(state, action) {
      const existingItem = state.selectedItems.find(
        (item) => item.id === action.payload
      );

      if (existingItem.quantity === 1) {
        state.selectedItems = state.selectedItems.filter(
          (item) => item.id !== action.payload
        );
      } else {
        existingItem.quantity = existingItem.quantity - 1;
        existingItem.price = existingItem.price - +25;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice;
