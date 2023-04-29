import React from "react";

import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
  nac: {
    marginBottom: "15px",
    marginTop: "5px",
    backgroundColor: "darkgray",
    width: "100%",
    height: "100%",
    color:"darkblue"
  },
}));

const ItemTitles = (props) => {
  const styles = useStyle();
  return (
    <>
      <Box className={styles.nac}>
        <Typography style={{ fontWeight: 600 }}>{props.itemName}</Typography>

        <Typography>{props.itemPrice}/-</Typography>
      </Box>
    </>
  );
};

export default ItemTitles;
