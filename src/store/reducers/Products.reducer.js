import { createSlice } from "@reduxjs/toolkit";

export const status = { LOADING: "loading", IDLE: "idle", ERROR: "error" };
const initialState = {
  data: [],
  isLoading: status.IDLE,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchApiActionLoading(state, action) {
      state.isLoading = action.payload;
    },
    fetchApiActionSuccess(state, action) {
      state.data = action.payload;
    },
    fetchApiActionError(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const {
  fetchApiActionLoading,
  fetchApiActionSuccess,
  fetchApiActionError,
} = productSlice.actions;
export default productSlice;
