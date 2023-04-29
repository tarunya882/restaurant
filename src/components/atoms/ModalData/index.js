import React from "react";
import { Table, TableContainer, Box, Typography } from "@material-ui/core";

import TableHeader from "./TableHeader";
import TablesBody from "./TablesBody";

const ModalData = (props) => {
  return props.items.length > 0 ? (
    <TableContainer>
      <Table>
        <TableHeader />
        <TablesBody {...props}></TablesBody>
      </Table>
    </TableContainer>
  ) : (
    <Box>
      <Typography>No Items ordered</Typography>
      <Typography>Drag and drop items to the table</Typography>
    </Box>
  );
};

export default ModalData;
