import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import PopupData from ".";
import baseTheme from "../../../../themes/index";

export default {
  title: "Atoms : Popup",
  component: PopupData,
};

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <PopupData {...args} />
  </ThemeProvider>
);

export const popupData = Template.bind({});
popupData.args = {
  items: [
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
  ],
  ServingUpdate: () => {},
  onDelete: () => {},
};
