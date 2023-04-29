import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    alignItems: "start",
  },
  contentContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "start",
    margin: "1vw",
  },
}));

const TableTitles = (props) => {
  const style = styles();
  return (
    <Box className={style.root}>
      <Box className={style.contentContainer}>
        <Typography style={{ marginLeft: "2.5vw" }}>
          <strong> Name: </strong>
        </Typography>
        <Typography style={{ marginLeft: "2.5vw" }}>
          <strong> Items: </strong>
        </Typography>
        <Typography style={{ margin: "0 0 0 2.5vw" }}>
          <strong> Price: </strong>
        </Typography>
      </Box>
      <Box className={style.contentContainer}>
        <Typography style={{ marginLeft: "1vw" }}>{props.tableName}</Typography>
        <Typography style={{ marginLeft: "1vw" }}>
          {props.totalItems}
        </Typography>
        <Typography style={{ marginLeft: "1vw" }}>
          {props.totalPrice || 0} /-
        </Typography>
      </Box>
    </Box>
  );
};

export default TableTitles;
