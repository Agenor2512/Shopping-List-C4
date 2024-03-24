/* eslint-disable react/prop-types */
import React from "react";

import searchIcon from "../assets/search.svg";

import "../styles/components/search.css";

function Search({ inputTools: handleChangeSearchInput }) {
  return (
    <div className="search-button-container">
      <div>
        <button type="button">
          <img src={searchIcon} alt="a magnifier icon" />
        </button>
        <input
          type="text"
          id="text"
          placeholder="Search an ingredient..."
          onChange={(event) => handleChangeSearchInput(event)}
        />
      </div>
    </div>
  );
}

export default Search;
