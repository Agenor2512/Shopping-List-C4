import { useEffect, useState } from "react";
import { readById } from "../services/listService";

import Header from "../components/Header";
import ShoppingListItem from "../components/ShoppingListItem";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

import "../styles/pages/shoppingList.css";

function ShoppingList() {
  const [list, setList] = useState(null);

  useEffect(() => {
    readById().then((data) => setList(data));
  }, []);

  return (
    <>
      <Header />
      <main>
        {list === null ? (
          <Loader />
        ) : (
          list.map((item) => <ShoppingListItem key={item.name} item={item} />)
        )}
      </main>
      <Footer />
    </>
  );
}

export default ShoppingList;
