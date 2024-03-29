import { useEffect, useState } from "react";
import { readById } from "../services/listService";
import ShoppingListItem from "../components/ShoppingListItem";
import Loader from "../components/Loader";

import "../styles/pages/shoppingList.css";
import Add from "../components/Add";

function ShoppingList() {
  const [list, setList] = useState(null);
  const [seed, setSeed] = useState(1);

  const triggerDataRefresh = () => {
    setSeed(Math.random());
  };

  useEffect(() => {
    readById().then((data) => setList(data));
  }, [seed]);

  return (
    <>
      <div>
        {list === null ? (
          <Loader />
        ) : (
          list.map((item) => (
            <ShoppingListItem
              key={item.name}
              item={item}
              refreshList={triggerDataRefresh}
            />
          ))
        )}
      </div>

      <Add refreshList={triggerDataRefresh} />
    </>
  );
}

export default ShoppingList;
