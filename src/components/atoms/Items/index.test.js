import { render, screen } from "@testing-library/react";

import ItemTitles from ".";

describe("Item Name", () => {
  it("render Item Name", () => {
    const wrapper = render(<ItemTitles itemName={"Biryani"} itemPrice={220} />);
    expect(wrapper).toBeDefined;
    expect(screen.queryByText("Biryani")).toBeInTheDocument();
    expect(screen.queryByText("220/-")).toBeInTheDocument();
  });
});
