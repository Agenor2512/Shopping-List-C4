/* eslint-disable react/prop-types */
import React, { useState } from "react";

import addedIcon from "../assets/added.svg";

import "../styles/components/existingIngredient.css";

function ExistingIngredient({ ingredient: { name } }) {
  const [isAdded, setIsAdded] = useState(false);

  return (
    <div className="existing-ingredient-container">
      <div className="existing-ingredient-card">
        <section>
          <h1>{name}</h1>

          <button
            type="button"
            onClick={() => setIsAdded(!isAdded)}
            className={isAdded && "added"}
          >
            {isAdded ? (
              <img
                src={addedIcon}
                alt="an icon telling the ingredient was added"
              />
            ) : (
              "Add"
            )}
          </button>
        </section>
      </div>
    </div>
  );
}

export default ExistingIngredient;
