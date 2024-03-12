import editIcon from "../assets/edit.svg";

import "../styles/shoppingListItem.css";

function ShoppingListItem() {
  return (
    <div className="item-container">
      <div className="item-card">
        <section className="card-header">
          <h1>Item Name</h1>
          <button type="button">
            <img src={editIcon} alt="edit icon" />
          </button>
        </section>

        <h3>Quantity</h3>
      </div>
    </div>
  );
}

export default ShoppingListItem;
