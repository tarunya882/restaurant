import { createSlice } from "@reduxjs/toolkit";

const initialState = require("../../data/tables.json");

export const tableSlice = createSlice({
  name: "tableSlice",
  initialState: initialState,
  reducers: {
    addItemToTable: (state, action) => {
      const index = action.payload.index;
      const item = action.payload.itemData;
      const [existItem] = state[index].items.filter(
        (ele) => ele.id === item.id
      );

      if (existItem) {
        existItem.servings++;
        state[index].totalPrice = state[index].totalPrice + item.itemPrice;
        return;
      }
      state[index].totalItems += 1;
      state[index].items.push({ ...item, servings: 1 });
      state[index].totalPrice = state[index].totalPrice + item.itemPrice;
    },
    updateServings: (state, action) => {
      const servings = action.payload.servings;
      const itemIndex = action.payload.itemIndex;
      const tableIndex = action.payload.tableIndex;
      const table = state[tableIndex];

      if (servings > 0 && servings <= 1000) {
        table.totalPrice +=
          (servings - table.items[itemIndex].servings) *
          table.items[itemIndex].itemPrice;
        table.items[itemIndex].servings = servings;
        return;
      } else if (servings === 0) {
        table.totalItems -= 1;
        table.totalPrice -=
          table.items[itemIndex].itemPrice * table.items[itemIndex].servings;
        table.items.splice(itemIndex, 1);
      }
    },
    deleteItem: (state, action) => {
      // console.log(state, action);
      const itemIndex = action.payload.itemIndex;
      const tableIndex = action.payload.tableIndex;
      const table = state[tableIndex];

      table.totalItems -= 1;
      table.totalPrice -=
        table.items[itemIndex].itemPrice * table.items[itemIndex].servings;
      table.items.splice(itemIndex, 1);
    },
  },
});

export const {
  addItemToTable,
  updateServings,
  deleteItem,
} = tableSlice.actions;

export default tableSlice.reducer;
