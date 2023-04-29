import { createSlice } from "@reduxjs/toolkit";

const initialState = require("../../data/items.json");

export const itemSlice = createSlice({
  name: "itemSlice",
  initialState: initialState,
  reducers: {},
});

export default itemSlice.reducer;
