import { useEffect, useState } from "react";
import { readById } from "../services/listService";

import Header from "../components/Header";
import ShoppingListItem from "../components/ShoppingListItem";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

import "../styles/pages/shoppingList.css";

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
      <Header />

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
      <Footer refreshList={triggerDataRefresh} />
    </>
  );
}

export default ShoppingList;
