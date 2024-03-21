import React, { useState } from "react";

import { Link } from "react-router-dom";
import doneIcon from "../assets/done.svg";

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
              <input
                id="item-name"
                name="item-name"
                type="item-name"
                required
              />
              <input
                id="item-quantity"
                name="item-quantity"
                type="item-quantity"
                required
              />
              <Link to="/">
                <button type="submit" className="validate">
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

export default Add;
