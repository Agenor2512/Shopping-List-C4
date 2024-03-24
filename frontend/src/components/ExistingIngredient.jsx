/* eslint-disable react/prop-types */
import React from "react";

import "../styles/components/existingIngredient.css";

function ExistingIngredient({ ingredient: { name, quantity } }) {
  return (
    <div className="existing-ingredient-container">
      <div className="existing-ingredient-card">
        <section>
          <h1>{name}</h1>
          <button type="button">Add</button>
        </section>
        <h3>{quantity}</h3>
      </div>
    </div>
  );
}

export default ExistingIngredient;
