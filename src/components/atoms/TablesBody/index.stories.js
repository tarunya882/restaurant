import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import TablesBody from "./index";
import baseTheme from "../../../../../themes/index";

export default {
  title: "Molecules : TableBody",
  component: TablesBody,
};

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <TablesBody {...args} />
  </ThemeProvider>
);

export const tableBody = Template.bind({});
tableBody.args = {
  items: [
    {
      itemName: "Item1",
      itemPrice: 20,
      servings: 1,
    },
    {
      itemName: "Item2",
      itemPrice: 30,
      servings: 1,
    },
  ],
  ServingUpdate: () => {},
  onDelete: () => {},
};
