import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Card } from "@material-ui/core";
import TableTitles from "../../atoms/TableTitles";

const styles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    backgroundColor:"darkgray",
    width: "25vw",
    minHeight: "8vw",
    // height: "8vw",
    margin: "3vw auto",
    cursor: "pointer",
    color:"darkblue"
  },
  container: {
    width: "65%",
    height: "100%",
  },
}));

const Table = (props) => {
  const style = styles();

  return (
    <Card raised={true} className={style.root} {...props}>
      <Box className={style.container}>
        <TableTitles {...props.data} />
      </Box>
    </Card>
  );
};

export default Table;
