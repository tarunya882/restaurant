import { fireEvent, render, act, screen } from "@testing-library/react";
import ItemsList from ".";

import { Provider } from "react-redux";
import store from "../../../store/index";

const getWrapper = () => {
  const wrapper = render(
    <div>
      <Provider store={store}>
        <ItemsList />
      </Provider>
    </div>
  );
  expect(wrapper).toBeDefined;
  return wrapper;
};

describe("Item List", () => {
  it("render Item List", () => {
    const wrapper = getWrapper();

    const mockFun = { setData: jest.fn() };

    fireEvent.dragStart(wrapper.queryByText("Dosa"), {
      dataTransfer: mockFun,
    });
    expect(mockFun.setData).toBeCalledWith(
      "itemData",
      '{"id":1,"itemName":"Dosa","url":"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.eGCJ8iRO5X3M7MTJ2fvuuAHaF7%26pid%3DApi&f=1","itemPrice":20,"course":"tiffin"}'
    );
  });
  it("Search bar testing", () => {
    const wrapper = render(
      <Provider store={store}>
        <ItemsList />
      </Provider>
    );
    expect(wrapper).toBeDefined;
    const searchBar = wrapper.getByTestId("Isearch");
    fireEvent.keyUp(searchBar, { target: { value: "Birya" } });
    expect(screen.queryByText("Biryani")).toBeInTheDocument();
    expect(screen.queryByText("Manchuria")).not.toBeInTheDocument();
  });
});
