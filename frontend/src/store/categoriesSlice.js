import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
});

export default categorySlice.reducer;
