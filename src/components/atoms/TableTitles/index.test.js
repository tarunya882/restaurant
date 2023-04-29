import { render, screen } from "@testing-library/react";
import TableName from ".";

//Test for rendering Titles
describe("Table titles", () => {
  it("rendering Table titles", () => {
    const wrapper = render(
      <TableName tableName={"Tony Stark"} totalItems={3} totalPrice={1800} />
    );
    expect(wrapper).toBeDefined;
    expect(wrapper.queryByText("Tony Stark")).toBeInTheDocument();
    expect(wrapper.queryByText("3")).toBeInTheDocument();
    expect(wrapper.queryByText("1800 /-")).toBeInTheDocument();
  });
});
