import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: [],
  cartLimit: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.selectedItems.find(
        (item) => item.id === action.payload.id
      );
      console.log("payload", action.payload);

      if (existingItem && existingItem.quantity === 5) {
        state.cartLimit = true;
        return;
      }

      if (!existingItem) {
        state.selectedItems.push({
          id: action.payload.id,
          name: action.payload.winery,
          image: action.payload.image,
          price: +action.payload.price,
          madeIn: action.payload.location,
          quantity: 1,
        });
      } else {
        existingItem.quantity = existingItem.quantity + 1;
        // existingItem.price = existingItem.price + +action.payload.price;
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
        // existingItem.price = existingItem.price - +25;
      }
    },
    removeItemFromCart(state, action) {
      const existingItem = state.selectedItems.find(
        (item) => item.id === action.payload
      );

      if (existingItem.id === action.payload) {
        state.selectedItems = state.selectedItems.filter(
          (item) => item.id !== action.payload
        );
      }
    },
  },
});

export const { addToCart, removeFromCart, removeItemFromCart } =
  cartSlice.actions;
export default cartSlice;
