import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const styles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    margin: 0,
    // overflow: "hidden",
  },
  nav: {
    height: "10vh",
  },
  title: {
    width: "30vw",
    textAlign: "center",
  },
  body: {
    display: "flex",
    height: "99vh",
  },
  tableList: {
    width: "30vw",
    overflow: "auto",
  },
  itemList: {
    overflow: "auto",
    width: "70vw",
  },
}));

const HomeTemplate = (props) => {
  const style = styles();
  return (
    <Box className={style.root}>
      <Box className={style.body}>
        <Box className={style.tableList}>{props.tableListComponent}</Box>
        <Box className={style.itemList}>{props.itemListComponent}</Box>
      </Box>
    </Box>
  );
};

export default HomeTemplate;
