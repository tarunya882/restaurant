import { render } from "@testing-library/react";

import TableHeader from ".";

describe("Table Header", () => {
  it("rendering Table Header", () => {
    const wrapper = render(<TableHeader />);
    expect(wrapper).toBeDefined;
  });
});
