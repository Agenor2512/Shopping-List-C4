import React, { useState } from "react";

import { Link } from "react-router-dom";

import "../styles/components/add.css";

function Add() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModalOnce = () => {
    setModal(true);
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
              <label htmlFor="item-name">Item name</label>
              <input
                id="item-name"
                name="item-name"
                type="item-name"
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
                  <button type="submit" className="validate">
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
