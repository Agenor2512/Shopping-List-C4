/* eslint-disable react/prop-types */
import React, { useState } from "react";

import { Link } from "react-router-dom";

import { create } from "../services/ingredientService";

import "../styles/components/add.css";

function Add({ refreshList }) {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModalOnce = () => {
    setModal(true);
  };

  const handleInputNameChange = (event) => {
    setName(event.target.value);
  };
  const handleInputQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleClick = () => {
    create({ name, quantity });
    refreshList();
    toggleModal();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
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
            <form className="add-modal-content" onSubmit={handleSubmit}>
              <h2>Add an item</h2>
              <label htmlFor="ingredient-name">Item name</label>
              <input
                id="ingredient-name"
                name="ingredient-name"
                type="ingredient-name"
                onChange={handleInputNameChange}
                required
              />
              <label htmlFor="item-quantity">Quantity</label>
              <input
                id="item-quantity"
                name="item-quantity"
                type="item-quantity"
                onChange={handleInputQuantityChange}
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
                  <button
                    type="submit"
                    className="cancel"
                    onClick={toggleModal}
                  >
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
