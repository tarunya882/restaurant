import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import Home from "./index";
import baseTheme from "../../../themes/index";
import { Box } from "@material-ui/core";

export default {
  title: "Templates : Home Template",
  component: Home,
};

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <Home {...args} />{" "}
  </ThemeProvider>
);

export const home = Template.bind({});
const style = {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
};
home.args = {
  tableListComponent: (
    <Box
      style={{
        ...style,
        background: "blue",
      }}
    >
      Table List
    </Box>
  ),
  itemListComponent: (
    <Box
      style={{
        ...style,
        background: "green",
      }}
    >
      Item List
    </Box>
  ),
};
