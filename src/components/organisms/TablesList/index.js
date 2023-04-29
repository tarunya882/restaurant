//   const onPress = (index) => {
//     dispatch(
//       updateData({
//         tableData: { ...tableData[index] },
//         tableIndex: index,
//       })
//     );
//   };
//   // const doneTypingTables = (search_table_text) => {
//   //   if (search_table_text.length > 0) {
//   //     setTables(
//   //       tables.filter((table) =>
//   //         table.tableName
//   //           .toLowerCase()
//   //           .includes(search_table_text.toLowerCase())
//   //       )
//   //     );
//   //   } else {
//   //     setTables([...props.list]);
//   //   }

//   const preventDefault = (event) => {
//     event.preventDefault();
//   };

//   // const addItem = (index, item) => {
//   //   const data = [...tables];
//   //   const [existItem] = data[index].items.filter((ele) => ele.id === item.id);
//   //   if (existItem) {
//   //     existItem.servings++;
//   //     data[index].totalPrice = data[index].totalPrice + item.itemPrice;
//   //     setTables(data);
//   //     return;
//   //   }
//   //   data[index].totalItems += 1;
//   //   data[index].items.push({ ...item, servings: 1 });
//   //   data[index].totalPrice = data[index].totalPrice + item.itemPrice;
//   //   setTables(data);
//   // };

//   const drop = (event, index) => {
//     event.preventDefault();
//     dispatch(
//       addItemToTable({
//         index: index,
//         itemData: JSON.parse(event.dataTransfer.getData("itemData")),
//       })
//     );
//   };

//   const ServingUpdate = (event, itemIndex) => {
//     // const servings = event.target.value;
//     // const data = [...tables];
//     // const table = data[dialog.tableIndex];

//     // if (servings > 0 && servings <= 1000) {
//     //   table.totalPrice +=
//     //     (servings - table.items[itemIndex].servings) *
//     //     table.items[itemIndex].itemPrice;
//     //   table.items[itemIndex].servings = servings;
//     //   setTables(data);
//     //   setDialog({
//     //     ...data[dialog.tableIndex],
//     //     tableIndex: dialog.tableIndex,
//     //   });
//     //   return;
//     // } else if (servings === "0") {
//     //   console.log("delete");
//     //   onDelete(null, itemIndex);
//     // }
//     dispatch(
//       updateServings({
//         servings: event.target.value,
//         itemIndex: itemIndex,
//         tableIndex: popupData.tableIndex,
//       })
//     );
//   };

//   const onDelete = (event, itemIndex) => {
//     // const data = [...tables];
//     // const table = data[dialog.tableIndex];
//     // table.totalItems -= 1;
//     // table.totalPrice -=
//     //   table.items[itemIndex].itemPrice * table.items[itemIndex].servings;
//     // table.items.splice(itemIndex, 1);
//     // setTables(data);
//     // setDialog({
//     //   ...data[dialog.tableIndex],
//     //   tableIndex: dialog.tableIndex,
//     // });
//     // if (table.items.length === 0) {
//     //   setOpen(false);
//     // }
//     dispatch(
//       deleteItem({
//         itemIndex: itemIndex,
//         tableIndex: popupData.tableIndex,
//       })
//     );
//   };

// export default TablesList;
import { Box, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import TableComponent from "../../molecules/Table";
import SearchBar from "../../atoms/SearchBar/index";
import ModalMolecule from "../../molecules/Modal";

import {
  onPress,
  drop,
  ServingUpdate,
  onDelete,
  onCloseModal,
} from "../../../bloc/index";

import {
  useSelector,
  // useDispatch
} from "react-redux";
// import { closeModal } from "../../../features/popupSlice/index";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    overflow: "hidden",
    background: "blueviolet",
  },
  input: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    position: "fixed",
    width: "25vw",
    top: "10px",
    marginBottom: "20px",
    height: "40px",
    background: "white",
  },
  list: {
    overflowY: "auto",
  },
}));

const TablesList = (props) => {
  const tableData = useSelector((state) => state.tableList);

  const popupData = useSelector((state) => state.modalData);

  const style = useStyles();
  // const dispatch = useDispatch();

  const [search_table_text, setSearch_Table_Text] = useState("");

  const handleKeyUp = (event) => {
    setSearch_Table_Text(event.target.value);
  };

  const preventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <Box className={style.root}>
      <Box className={style.input}>
        <SearchBar
          placeholder="Search by Table Name"
          onKeyUp={handleKeyUp}
          className={style.inputField}
          inputProps={{ "data-testid": "Tsearch" }}
        />
      </Box>
      <ModalMolecule
        popup={{
          open: popupData.isOpen,
          close: onCloseModal,

          tableName: tableData[popupData.tableIndex].tableName,
          totalPrice: tableData[popupData.tableIndex].totalPrice,
        }}
        popupData={{
          items: tableData[popupData.tableIndex].items,
          ServingUpdate: ServingUpdate,
          onDelete: onDelete,
        }}
      />
      <Box className={style.list}>
        {(
          tableData.filter((t) =>
            t.tableName.toLowerCase().includes(search_table_text.toLowerCase())
          ) || tableData
        ).map((element, index) => (
          <TableComponent
            id={"table-" + index}
            key={"table-" + index}
            onDragOver={preventDefault}
            onDrop={(event) => drop(event, index)}
            onClick={() => onPress(index)}
            data={element}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TablesList;
