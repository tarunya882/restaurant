import { Box, makeStyles ,Menu, MenuItem} from "@material-ui/core";
import React, { useState } from "react";
import Item from "../../molecules/Items/index";
import SearchBar from "../../atoms/SearchBar/index";
import { useSelector } from "react-redux";
import LoginButton from "../../atoms/LoginButton";
import Profile from "../../atoms/Profile";
import { useAuth0 } from "@auth0/auth0-react";

const useStyles = makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
    },
  },
  root: {
    width: "100%",
    background: "blueviolet",
  },
  input: {
    // position: "fixed",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    width: "100%",
    margin: "20px 5vw",
    marginTop: "0px",
    height: "40px",
    background: "white",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "auto auto ",
    },
    overflowY: "auto",
  },
}));
const ItemsList = (props) => {  

  // const [items, setItems] = useState([...props.list]);
  const itemsData = useSelector((state) => state.itemsList);
  const style = useStyles();
  const [searchText, setSearchText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const { logout, isAuthenticated } = useAuth0();

  const handleKeyUp = (event) => {
    setSearchText(event.target.value);
    // search_item_text = event.target.value;
    // searchItems(search_item_text);
  };

  // const searchItems = (search_item_text) => {
  //   if (search_item_text.length > 0) {
  //     setItems(
  //       props.list.filter(
  //         (item) =>
  //           item.itemName
  //             .toLowerCase()
  //             .includes(search_item_text.toLowerCase()) ||
  //           item.course.toLowerCase().includes(search_item_text.toLowerCase())
  //       )
  //     );
  //   } else {
  //     setItems([...props.list]);
  //   }
  // };

  const drag = (event, data) => {
    event.dataTransfer.setData("itemData", JSON.stringify(data));
  };

  const handleClick = (event) => {
    console.log("en", event);
    isOpen ? setAnchorEl(event.currentTarget) : setAnchorEl(null);
    setIsOpen(prevState => !prevState);
  };

  return (
    <Box className={style.root}>
      <Box className={style.input}>
        <SearchBar
          placeholder="Search by Item Name, by Course"
          onKeyUp={handleKeyUp}
          className={style.inputField}
          style={{ marginTop: "10px" }}
          inputProps={{ "data-testid": "Isearch" }}
        />
         <LoginButton></LoginButton>
          <Profile  onClick ={handleClick}></Profile>
          <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClick}
        transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClick}>Profile</MenuItem>
        <MenuItem onClick={handleClick}>My account</MenuItem>
        <MenuItem onClick={() => logout()}>Logout</MenuItem>
      </Menu>
      </Box>
      <Box className={style.grid}>
        {itemsData
          .filter(
            (i) =>
              i.itemName.toLowerCase().includes(searchText.toLowerCase()) ||
              i.course.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((element) => (
            <Item
              key={"item-" + element.id}
              data={element}
              draggable={true}
              onDragStart={(event) => drag(event, element)}
            ></Item>
          ))}
      </Box>
    </Box>
  );
};

export default ItemsList;
