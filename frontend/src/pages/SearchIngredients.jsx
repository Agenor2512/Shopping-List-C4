/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/pages/searchIngredients.css";
import ExistingIngredient from "../components/ExistingIngredient";
import Loader from "../components/Loader";
import { searchByQuery } from "../services/ingredientService";

function SearchIngredients() {
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    searchByQuery().then((data) => setIngredients(data));
  }, []);
  return (
    <div className="all-search-container">
      <Header />
      <Search />
      <div className="list-container">
        {ingredients === null ? (
          <Loader />
        ) : (
          ingredients.map((ingredient) => (
            <ExistingIngredient key={ingredient.id} ingredient={ingredient} />
          ))
        )}
      </div>
      <Footer />
    </div>
  );
}

export default SearchIngredients;
