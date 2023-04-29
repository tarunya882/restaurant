import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import TableHeader from ".";
import baseTheme from "../../../../../themes/index";

export default {
  title: "Molecules : TableHeader",
  component: TableHeader,
};

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <TableHeader {...args} />
  </ThemeProvider>
);

export const tableHeader = Template.bind({});
tableHeader.args = {};
