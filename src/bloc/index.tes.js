import store from "../store";
import { onPress, onDelete, ServingUpdate, drop } from ".";
import { updateData, closeModal } from "../../src/features/popupSlice/index";
import {
  addItemToTable,
  updateServings,
  deleteItem,
} from "../../src/features/tableSlice/index";

describe("util tests", () => {
  const useDispatchSpy = jest.spyOn(store, "dispatch");

  it("on table click", () => {
    onPress(1);
    expect(useDispatchSpy).toBeCalledWith(
      updateData({
        tableIndex: 1,
      })
    );
  });

  it("on delete", () => {
    onDelete(event, 1);
    expect(useDispatchSpy).toBeCalledWith(
      deleteItem({
        itemIndex: 1,
        tableIndex: 0,
      })
    );
  });

  it("ServingUpdate", () => {
    const event = { target: { value: "2" } };
    ServingUpdate(event, 1);
    expect(useDispatchSpy).toBeCalledWith(
      updateServings({
        servings: event.target.value,
        itemIndex: 1,
        tableIndex: 0,
      })
    );
  });
});
