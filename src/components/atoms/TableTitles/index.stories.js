import React from "react";
import TableTitles from "./index";
import baseTheme from "../../../../themes/index";
import { ThemeProvider } from "@material-ui/core/styles";

export default {
  title: "Atoms : Table name",
  component: TableTitles,
};

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <TableTitles {...args} />
  </ThemeProvider>
);

export const tableName = Template.bind({});
tableName.args = {
  tableName: "Tony Stark",
  totalItems: 20,
  totalPrice: 180,
};
