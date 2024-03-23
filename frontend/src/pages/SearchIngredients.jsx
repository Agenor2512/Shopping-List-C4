import React from "react";
import Search from "../components/Search";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/pages/searchIngredients.css";

function SearchIngredients() {
  return (
    <div>
      <Header />
      <Search />
      <Footer />
    </div>
  );
}

export default SearchIngredients;
