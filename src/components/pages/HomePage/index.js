import React from "react";

import ItemsList from "../../organisms/ItemList";
import TablesList from "../../organisms/TablesList";
import HomeTemplate from "../../templates/Home";

const HomePage = (props) => {
  return (
    <HomeTemplate
      tableListComponent={<TablesList list={props.tableList} />}
      itemListComponent={<ItemsList list={props.itemList} />}
    />
  );
};

export default HomePage;
