import { updateData, closeModal } from "../slices/modalSlice/index";
import store from "../../src/store/index";

import {
  addItemToTable,
  updateServings,
  deleteItem,
} from "../slices/tableSlice/index";

const modalData = () => store.getState().modalData;

export const onPress = (index) => {
  store.dispatch(
    updateData({
      tableIndex: index,
    })
  );
};

export const onDelete = (event, itemIndex) => {
  store.dispatch(
    deleteItem({
      itemIndex: itemIndex,
      tableIndex: modalData().tableIndex,
    })
  );
};

export const ServingUpdate = (event, itemIndex) => {
  store.dispatch(
    updateServings({
      servings: event.target.value,
      itemIndex: itemIndex,
      tableIndex: modalData().tableIndex,
    })
  );
};

export const drop = (event, index) => {
  event.preventDefault();
  store.dispatch(
    addItemToTable({
      index: index,
      itemData: JSON.parse(event.dataTransfer.getData("itemData")),
    })
  );
};

export const onCloseModal = () => {
  store.dispatch(closeModal());
};
