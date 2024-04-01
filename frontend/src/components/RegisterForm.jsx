import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { addUser } from "../services/userService";

import RegisterContext from "../context/RegisterContext";

import backward from "../assets/arrow_back.svg";

import "../styles/components/registerForm.css";

function RegisterForm() {
  const { userInformations, setUserInformations } = useContext(RegisterContext);
  const navigate = useNavigate();

  const handleUserInformations = ({ target: { name, value } }) => {
    setUserInformations({
      ...userInformations,
      [name]: value,
    });
  };

  const registerUser = () => {
    addUser(userInformations);
    navigate("/");
  };

  return (
    <div className="register-form-container">
      <button type="button" className="backward">
        <img src={backward} alt="backward arrow" />
      </button>
      <form>
        <h1>Create new Account</h1>
        <label htmlFor="email">NAME</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          onChange={(event) => handleUserInformations(event)}
        />
        <label htmlFor="email">EMAIL</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          onChange={(event) => handleUserInformations(event)}
        />
        <label htmlFor="password">PASSWORD</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="********"
          onChange={(event) => handleUserInformations(event)}
        />
        <label htmlFor="verify-password">VERIFY PASSWORD</label>
        <input
          id="verify-password"
          name="verify-password"
          type="password"
          placeholder="********"
        />
        <button type="submit" onClick={registerUser}>
          Sign up
        </button>
        <p>
          Already have an account ? <Link to="/">Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
