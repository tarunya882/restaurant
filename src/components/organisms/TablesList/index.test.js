import { act, fireEvent, render, screen } from "@testing-library/react";
import store from "../../../store/index";
import TablesList from ".";
import { Provider } from "react-redux";

describe("Table", () => {
  it("Initialrender", () => {
    const wrapper = render(
      <Provider store={store}>
        <TablesList
          tableData={require("../../../data/tables.json")}
          popupData={{
            tableIndex: 0,
            isOpen: false,
          }}
        />
      </Provider>
    );
    expect(wrapper).toBeDefined;
    expect(wrapper.queryAllByText("Table1")).toHaveLength(1);
    fireEvent.click(wrapper.queryByText("Table1"));
    expect(wrapper.queryByText("No Items ordered")).toBeInTheDocument();
    expect(wrapper.queryByText("Total Amount:")).toBeInTheDocument();
    expect(wrapper.queryAllByText("Table1")).toHaveLength(2);
  });
  it("Adding Item", () => {
    const wrapper = render(
      <Provider store={store}>
        <TablesList />
      </Provider>
    );
    expect(wrapper).toBeDefined;

    const mockFun = { getData: jest.fn().mockReturnValue(1) };

    const prevDFault = jest.fn();

    fireEvent.dragOver(wrapper.queryByText("Table1"), {
      preventDefault: prevDFault,
    });

    expect(prevDFault).toBeCalledTimes(0);

    fireEvent.drop(wrapper.queryByText("Table1"), {
      dataTransfer: mockFun,
    });
    expect(mockFun.getData).toBeCalledWith("itemData");

    fireEvent.click(wrapper.queryByText("Table1"));
  });

  it("Search bar testing", () => {
    const wrapper = render(
      <Provider store={store}>
        <TablesList />
      </Provider>
    );
    expect(wrapper).toBeDefined;
    const searchBar = wrapper.getByTestId("Tsearch");
    fireEvent.keyUp(searchBar, { target: { value: "Table1" } });
    expect(screen.queryByText("Table1")).toBeInTheDocument();
    expect(screen.queryByText("Table1")).not.toBeInTheDocument();
  });
});
