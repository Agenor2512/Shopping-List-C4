import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { addUser } from "../services/userService";

import RegisterContext from "../context/RegisterContext";

import backward from "../assets/arrow_back.svg";

import "../styles/components/registerForm.css";
import AppContext from "../context/AppContext";

function RegisterForm() {
  const { setToDisplay } = useContext(AppContext);
  const { userInformations, setUserInformations } = useContext(RegisterContext);
  const [incorrectFields, setIncorrectFields] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setToDisplay(false);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const removeIncorrectFields = (name) => {
    const newIncorrectFields = incorrectFields.slice();
    newIncorrectFields.splice(newIncorrectFields.indexOf(name), 1);
    setIncorrectFields(newIncorrectFields);
  };

  const handleUserInformations = ({ target: { name, value } }) => {
    setUserInformations({
      ...userInformations,
      [name]: value,
    });
    removeIncorrectFields(name);
  };

  const validateForm = () => {
    let result = true;
    const invalidFields = [];

    if (userInformations.name.length < 3) {
      invalidFields.push("name");
      result = false;
    }

    if (
      !userInformations.email.match(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/
      )
    ) {
      invalidFields.push("email");
      result = false;
    }

    if (
      !userInformations.password.match(
        /^(?=.*[*#])[a-zA-Z0-9À-ÖØ-öø-ÿ*#]{8,15}$/
      )
    ) {
      invalidFields.push("password");
      result = false;
    }

    if (
      userInformations.password !== userInformations.checkPassword ||
      userInformations.checkPassword.length === 0
    ) {
      invalidFields.push("checkPassword");
      result = false;
    }

    setIncorrectFields(invalidFields);
    return result;
  };

  const registerUser = () => {
    if (validateForm()) {
      addUser(userInformations);
      navigate("/login");
    } else {
      console.info("Invalid form");
    }
  };

  return (
    <div className="register-form-container">
      <button type="button" className="backward">
        <img src={backward} alt="backward arrow" />
      </button>
      <form onSubmit={(event) => handleSubmit(event)}>
        <h1>Create an Account</h1>
        <label htmlFor="email">NAME</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          required
          className={incorrectFields.includes("name") ? "incorrect-field" : ""}
          onChange={(event) => handleUserInformations(event)}
        />
        <label htmlFor="email">EMAIL</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          required
          className={incorrectFields.includes("email") ? "incorrect-field" : ""}
          onChange={(event) => handleUserInformations(event)}
        />
        <label htmlFor="password">PASSWORD</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="********"
          required
          className={
            incorrectFields.includes("password") ? "incorrect-field" : ""
          }
          onChange={(event) => handleUserInformations(event)}
        />
        <label htmlFor="verify-password">VERIFY PASSWORD</label>
        <input
          id="verify-password"
          name="checkPassword"
          type="password"
          placeholder="********"
          required
          className={
            incorrectFields.includes("checkPassword") ? "incorrect-field" : ""
          }
          onChange={(event) => handleUserInformations(event)}
        />
        <button type="submit" onClick={registerUser}>
          Sign up
        </button>
        <p>
          Already have an account ? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
