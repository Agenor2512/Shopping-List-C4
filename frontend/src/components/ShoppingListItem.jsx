import "../styles/components/shoppingListItem.css";
import Edit from "./Edit";

function ShoppingListItem() {
  return (
    <div className="item-container">
      <div className="item-card">
        <section className="card-header">
          <h1>Item Name</h1>
          <Edit />
        </section>
        <h3>Quantity</h3>
      </div>
    </div>
  );
}

export default ShoppingListItem;
