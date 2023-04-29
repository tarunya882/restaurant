import { configureStore } from "@reduxjs/toolkit";
import table from "../slices/tableSlice/index";
import modal from "../slices/modalSlice/index";
import items from "../slices/itemSlice/index";
const store = configureStore({
  reducer: {
    tableList: table,
    modalData: modal,
    itemsList: items,
  },
});
export default store;
