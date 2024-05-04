import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;