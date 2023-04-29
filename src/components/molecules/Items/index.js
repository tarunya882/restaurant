import React from "react";
import ItemTitles from "../../atoms/Items/index";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Box } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  // body: {},
  // card: {
  //   margin: "10px",
  // },
  // icon: { minHeight: "100%" },
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    width: "250px",
    borderRadius:"20px",
    height: "calc(19vw)",
    marginLeft: "2vw",
    marginRight: "2vw",
    marginTop: "3vw",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      width: "30vw",
      height: "40vw",
      margin: "10px",
    },
  },
  iconContainer: {
    width: "100%",
    height: "15vw",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      height: "28vw",
    },
  },
  icon: {
    height: "calc(14vw + 10px)",
    width: "100%",
    objectFit: "cover",
    [theme.breakpoints.down("sm")]: {
      height: "28vw",
    },
  },
  container: {
    width: "100%",
    height: "5vw",
    [theme.breakpoints.down("sm")]: {
      height: "12vw",
    },
  },
}));

const Item = (props) => {
  const styles = useStyle();
  return (
    <>
      <Card draggable={true} className={styles.root} {...props}>
        <Box>
          <img
            src={
              props.data.url ||
              "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.qGZ7OQ3zljHrJcf0bNy-_gHaE8%26pid%3DApi&f=1"
            }
            className={styles.icon}
            // style={objectFit: "cover"}
            height="100px"
            alt="No"
            draggable={false}
          />
        </Box>
        <ItemTitles {...props.data} />
      </Card>
    </>
  );
};

export default Item;
