import { createSlice } from "@reduxjs/toolkit";

const initialData = {
  tableIndex: 0,
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modalSlice",
  initialState: initialData,
  reducers: {
    updateData: (state, action) => {
      state.tableIndex = action.payload.tableIndex;
      state.isOpen = true;
    },
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { updateData, openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
