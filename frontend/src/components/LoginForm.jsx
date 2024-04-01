import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import LoginContext from "../context/LoginContext";

import logo from "../assets/logo.png";

import "../styles/components/loginForm.css";

function LoginForm() {
  const { loginInformations, setLoginInformations } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleLogin = ({ target: { name, value } }) => {
    setLoginInformations({
      ...loginInformations,
      [name]: value,
    });
    navigate("/shoppinglist");
  };
  return (
    <div className="login-form-container">
      <div>
        <img src={logo} alt="website logo" />
      </div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <h1>Login</h1>
        <h4>Sign in to continue.</h4>
        <label htmlFor="email">EMAIL</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          onChange={(event) => handleLogin(event)}
        />
        <label htmlFor="password">PASSWORD</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="********"
          onChange={(event) => handleLogin(event)}
        />
        <button type="submit">Log in</button>
        <p>
          or <Link to="/register">Create an account</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
