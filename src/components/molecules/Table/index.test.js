import { render, screen } from "@testing-library/react";
import Table from ".";

describe("Table", () => {
  it("render Table", () => {
    const wrapper = render(
      <Table
        data={{ tableName: "Table1", totalItems: 3, totalPrice: 1000 }}
      />
    );
    expect(wrapper).toBeDefined;
    expect(screen.queryByText("Table1")).toBeInTheDocument();
    expect(screen.queryByText("3")).toBeInTheDocument();
    expect(screen.queryByText("1000 /-")).toBeInTheDocument();
  });
});
