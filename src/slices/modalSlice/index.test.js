import popupDataSlice, { openModal, closeModal, updateData } from ".";

describe("Popup Data Slice", () => {
  it("Initial state", () => {
    expect(popupDataSlice(undefined, {})).toEqual({
      tableIndex: 0,
      isOpen: false,
    });
  });
  it("Open popup", () => {
    expect(popupDataSlice(undefined, openModal())).toEqual({
      tableIndex: 0,
      isOpen: true,
    });
  });
  it("Close popup", () => {
    expect(
      popupDataSlice(
        {
          tableIndex: 0,
          isOpen: true,
        },
        closeModal()
      )
    ).toEqual({
      tableIndex: 0,
      isOpen: false,
    });
  });
  it("change data", () => {
    expect(popupDataSlice(undefined, updateData({ tableIndex: 2 }))).toEqual({
      tableIndex: 2,
      isOpen: true,
    });
  });
});
