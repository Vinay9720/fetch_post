const initialState = {
  selectedItems: [],
};

export const cartReducer = (state = initialState, action) => {
  const length = state.selectedItems.length;
  console.log("length", length);
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.selectedItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return { ...state };
      } else {
        return {
          ...state,
          selectedItems: [...state.selectedItems, action.payload],
        };
      }

    default:
      return state;
  }
};
