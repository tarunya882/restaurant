import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import Modal from ".";
import baseTheme from "../../../../themes/index";

export default {
  title: "Atoms : Modal",
  component: Modal,
};

const Template = (args) => (
  <ThemeProvider theme={baseTheme}>
    <Modal {...args} />
  </ThemeProvider>
);

export const modal = Template.bind({});
modal.args = {
  tableName: "Tony Stark",
  totalPrice: 320,

  open: true,
};
