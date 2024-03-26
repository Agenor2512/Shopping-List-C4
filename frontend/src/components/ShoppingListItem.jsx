/* eslint-disable react/prop-types */
import Edit from "./Edit";

import "../styles/components/shoppingListItem.css";

function ShoppingListItem({ item: { name, quantity } }) {
  return (
    <div className="item-container">
      <div className="item-card">
        <section className="card-header">
          <h1>{name}</h1>
          <Edit name={name} quantity={quantity} />
        </section>
        <h3>{quantity}</h3>
      </div>
    </div>
  );
}

export default ShoppingListItem;
