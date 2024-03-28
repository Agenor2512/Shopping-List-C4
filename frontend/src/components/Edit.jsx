/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { destroy, modify } from "../services/listHasIngredientsService";

import editIcon from "../assets/edit.svg";
import doneIcon from "../assets/done.svg";

import "../styles/components/edit.css";

function Edit({ item: { name, quantity, listId, ingredientId }, refreshList }) {
  const [modal, setModal] = useState(false);
  const [ingredientQuantity, setIngredientQuantity] = useState(quantity);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModalOnce = () => {
    setModal(true);
  };

  const handleQuantityChange = (event) => {
    setIngredientQuantity(event.target.value);
  };

  // Async calls, used then() to return a promise and make refresh functional
  const handleItemDelete = () => {
    destroy(ingredientId)
      .then(() => refreshList())
      .then(() => toggleModal());
  };

  const handleSubmission = () => {
    modify({ listId, ingredientId, quantity: ingredientQuantity })
      .then(() => refreshList())
      .then(() => toggleModal());
  };

  return (
    <>
      <section className="edit_button_container">
        <button type="button" className="edit_button" onClick={toggleModalOnce}>
          <img src={editIcon} alt="edit an item icon" />
        </button>
      </section>
      {modal && (
        <div className="overlay">
          <dialog className="edit_modal">
            <form className="edit_modal_content">
              <h2>Modify an item</h2>
              <input
                id="item-name"
                name="item-name"
                type="item-name"
                value={name}
                required
              />
              <input
                id="item-quantity"
                name="item-quantity"
                type="item-quantity"
                defaultValue={quantity}
                onChange={handleQuantityChange}
                required
              />
              <button
                type="submit"
                className="delete"
                onClick={handleItemDelete}
              >
                Delete it
              </button>
              <Link to="/">
                <button
                  type="submit"
                  className="validate"
                  onClick={handleSubmission}
                >
                  <img src={doneIcon} alt="done a task icon" />
                </button>
              </Link>
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

export default Edit;
