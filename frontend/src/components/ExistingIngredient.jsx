import React from "react";

import "../styles/components/existingIngredient.css";

function ExistingIngredient() {
  return (
    <div className="existing-ingredient-container">
      <div className="existing-ingredient-card">
        <section>
          <h1>Item Name</h1>
          <button type="button">Add</button>
        </section>
        <h3>Quantity</h3>
      </div>
    </div>
  );
}

export default ExistingIngredient;
