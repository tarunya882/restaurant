import { render, screen } from "@testing-library/react";
// import popupDataSlice, {
//   updateData,
//   deleteItem,
// } from "../../../../../features/popupSlice";
import TablesData from ".";

describe("Pop Name", () => {
  it("render items price", () => {
    const wrapper = render(
      <TablesData
        items={[
          {
            itemName: "Biryani",
            itemPrice: 80,
            servings: 2,
          },
          {
            itemName: "Noodles",
            itemPrice: 50,
            servings: 1,
          },
          { itemName: "Pizza", itemPrice: 20, servings: 2 },
        ]}
      />
    );
    expect(wrapper).toBeDefined;
    expect(screen.queryByText("80/-")).toBeInTheDocument();
    expect(screen.queryByText("50/-")).toBeInTheDocument();
    expect(screen.queryByText("20/-")).toBeInTheDocument();
  });
  // it("change data", () => {
  //   expect(popupDataSlice(undefined, updateData({ tableIndex: 2 }))).toEqual({
  //     tableIndex: 2,
  //     isOpen: true,
  //   });
  // });
});
