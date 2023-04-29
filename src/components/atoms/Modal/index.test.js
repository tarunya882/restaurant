import { fireEvent, render } from "@testing-library/react";
import PopUp from ".";

describe("Popup ", () => {
  //   Popup Renders when Open is set to true
  it("Open popup Modal when open is set to true", () => {
    const wrapper = render(
      <PopUp open={true} tableName={"Tony Stark"} totalPrice={20} />
    );
    expect(wrapper).toBeDefined;
    expect(wrapper.queryByText("Tony Stark")).toBeInTheDocument();
    expect(wrapper.queryByText("20/-")).toBeInTheDocument();
  });
  // Popup Closes when Open is set to false
  it("Close Popup modal when open is set to false", () => {
    const wrapper = render(<PopUp open={false} tableName={0} />);
    expect(wrapper).toBeDefined;
    expect(wrapper.queryByText("Tony Stark")).toBeNull();
  });
});
