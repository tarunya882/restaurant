import { render, screen } from "@testing-library/react";

import PopupData from ".";

describe("Pop Name", () => {
  it("render Pop Name", () => {
    const wrapper = render(<PopupData items={[]} />);
    expect(wrapper).toBeDefined;
    expect(screen.queryByText("No Items ordered")).toBeInTheDocument();
    // expect(screen.queryByText("220/-")).toBeInTheDocument();
  });
  it("render items price", () => {
    const wrapper = render(
      <PopupData
        items={[
          {
            itemName: "Biryani",
            itemPrice: 180,
            servings: 2,
          },
          {
            itemName: "Noodles",
            itemPrice: 150,
            servings: 1,
          },
          { itemName: "Pizza", itemPrice: 240, servings: 2 },
        ]}
      />
    );
    expect(wrapper).toBeDefined;
    expect(screen.queryByText("180/-")).toBeInTheDocument();
    expect(screen.queryByText("150/-")).toBeInTheDocument();
    expect(screen.queryByText("240/-")).toBeInTheDocument();
    // expect(screen.queryByText("990/-")).toBeInTheDocument();
  });
});
