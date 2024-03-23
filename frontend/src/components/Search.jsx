import React from "react";

import searchIcon from "../assets/search.svg";

import "../styles/components/search.css";

function Search() {
  return (
    <div className="search-button">
      <div>
        <button type="button">
          <img src={searchIcon} alt="a magnifier icon" />
        </button>
        <input type="text" id="text" placeholder="Search an ingredient..." />
      </div>
    </div>
  );
}

export default Search;
