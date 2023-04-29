import { TableHead, TableRow, TableCell } from "@material-ui/core";
import { Typography } from "@material-ui/core/";
import React from "react";

const TableHeader = (props) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <Typography>
            <strong>S.No</strong>
          </Typography>
        </TableCell>

        <TableCell>
          <Typography>
            <strong>Name</strong>
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            <strong>Price</strong>
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            <strong>Servings</strong>
          </Typography>
        </TableCell>
        <TableCell>
          <Typography>
            <strong>Delete</strong>
          </Typography>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
