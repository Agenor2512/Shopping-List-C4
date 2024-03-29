/* eslint-disable react/prop-types */
import Edit from "./Edit";

import "../styles/components/shoppingListItem.css";

function ShoppingListItem({ item, refreshList }) {
  return (
    <div className="item-container">
      <div className="item-card">
        <section className="card-header">
          <h1>{item.name}</h1>
          <Edit item={item} refreshList={refreshList} />
        </section>
        <h3>{item.quantity}</h3>
      </div>
    </div>
  );
}

export default ShoppingListItem;
