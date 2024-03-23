import ShoppingListItem from "../components/ShoppingListItem";

import "../styles/pages/shoppingList.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ShoppingList() {
  return (
    <>
      <Header />
      <main>
        <ShoppingListItem />
      </main>
      <Footer />
    </>
  );
}

export default ShoppingList;
