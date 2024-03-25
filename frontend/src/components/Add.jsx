import React, { useState } from "react";

import { Link } from "react-router-dom";

import { create } from "../services/ingredientService";

import "../styles/components/add.css";

function Add() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModalOnce = () => {
    setModal(true);
  };

  const handleInputChange = (event) => {
    setName(event.target.name);
  };

  const handleClick = () => {
    create(name);
    toggleModal();
  };

  return (
    <>
      <section className="add-button-container">
        <button type="button" className="add-button" onClick={toggleModalOnce}>
          <p>+</p>
        </button>
      </section>
      {modal && (
        <div className="add-overlay">
          <dialog className="add-modal">
            <form className="add-modal-content">
              <h2>Add an item</h2>
              <label htmlFor="ingredient-name">Item name</label>
              <input
                id="ingredient-name"
                name="ingredient-name"
                type="ingredient-name"
                onChange={handleInputChange}
                required
              />
              <label htmlFor="item-quantity">Quantity</label>
              <input
                id="item-quantity"
                name="item-quantity"
                type="item-quantity"
                required
              />
              <div>
                <Link to="/">
                  <button
                    type="submit"
                    className="validate"
                    onClick={handleClick}
                  >
                    Add it !
                  </button>
                </Link>
                <Link to="/">
                  <button type="submit" className="cancel">
                    Cancel
                  </button>
                </Link>
              </div>
            </form>
            <button type="button" onClick={toggleModal}>
              &times;
            </button>
          </dialog>
        </div>
      )}
    </>
  );
}

export default Add;
