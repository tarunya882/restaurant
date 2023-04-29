import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";

const Modal = (props) => {
  return (
    <Dialog open={props.open} onClose={props.close} maxWidth={"xl"}>
      <DialogTitle>
        <Typography>
          Table Name: <strong>{props.tableName}</strong>
        </Typography>
      </DialogTitle>
      <DialogContent dividers>{props.children}</DialogContent>
      <DialogContent>
        <Typography>
          Total Amount: <strong>{props.totalPrice}/-</strong>
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
