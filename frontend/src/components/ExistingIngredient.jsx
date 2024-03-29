/* eslint-disable react/prop-types */
import React, { useState } from "react";

import addedIcon from "../assets/added.svg";

import "../styles/components/existingIngredient.css";
import { create } from "../services/listHasIngredientsService";

function ExistingIngredient({ ingredient: { name, id } }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    create(id);
    setIsAdded(!isAdded);
  };

  return (
    <div className="existing-ingredient-container">
      <div className="existing-ingredient-card">
        <section>
          <h1>{name}</h1>

          <button
            type="button"
            onClick={handleClick}
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
