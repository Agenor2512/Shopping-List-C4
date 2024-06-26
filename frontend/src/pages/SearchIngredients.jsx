/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Search from "../components/Search";

import "../styles/pages/searchIngredients.css";
import ExistingIngredient from "../components/ExistingIngredient";
import Loader from "../components/Loader";
import { searchByQuery } from "../services/ingredientService";

function SearchIngredients() {
  const [ingredients, setIngredients] = useState(null);
  const [query, setQuery] = useState("");

  const handleChangeSearchInput = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    searchByQuery(query).then((data) => setIngredients(data));
  }, [query]);
  return (
    <div className="all-search-container">
      <Search inputTools={handleChangeSearchInput} />
      <div className="list-container">
        {ingredients === null ? (
          <Loader />
        ) : (
          ingredients.map((ingredient) => (
            <ExistingIngredient key={ingredient.id} ingredient={ingredient} />
          ))
        )}
      </div>
    </div>
  );
}

export default SearchIngredients;
