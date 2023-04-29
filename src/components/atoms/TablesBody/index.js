import React from "react";
import {
  TableBody,
  TableCell,
  Typography,
  OutlinedInput,
  TableRow,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
const TablesBody = (props) => {
  return (
    <TableBody>
      {props.items.map((row, index) => (
        <TableRow key={"table-item-" + index}>
          <TableCell>
            <Typography>{index + 1}</Typography>
          </TableCell>
          <TableCell>
            <Typography> {row.itemName}</Typography>
          </TableCell>
          <TableCell>
            <Typography>{row.itemPrice}/-</Typography>
          </TableCell>
          <TableCell>
            <OutlinedInput
              onChange={(event) => props.ServingUpdate(event, index)}
              value={row.servings}
              type="number"
            />
          </TableCell>
          <TableCell align="left">
            <Delete
              style={{ cursor: "pointer" }}
              onClick={(event) => props.onDelete(event, index)}
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TablesBody;
