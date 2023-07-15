import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchData(state, action) {
      state.search = action.payload;
    },
  },
});

export const { searchData } = searchSlice.actions;
export default searchSlice;
