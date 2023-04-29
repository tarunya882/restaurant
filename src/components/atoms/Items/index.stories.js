import React from "react";
import ItemTitles from "./index";
import { ThemeProvider } from "@material-ui/core/styles";
import { baseTheme } from "../../../../themes/index";

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <ItemTitles {...args} />
  </ThemeProvider>
);

export const titles = Template.bind({});
titles.args = {
  itemName: "Biryani",
  itemPrice: 180.0,
};

export default {
  title: "Atoms : Item Titles",
  component: titles,
};
