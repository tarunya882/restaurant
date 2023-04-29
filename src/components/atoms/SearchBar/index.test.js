import { fireEvent, render } from "@testing-library/react";
import SearchBar from ".";

describe("Search Bar", () => {
  it("rendering Search bar", () => {
    const mockFun = jest.fn();

    const wrapper = render(
      <SearchBar onChange={mockFun} placeholder={"searchbar"} />
    );
    expect(wrapper).toBeDefined;

    fireEvent.change(wrapper.getByPlaceholderText("searchbar"), {
      target: { value: "random" },
    });
    expect(mockFun).toBeCalled();
  });
});
