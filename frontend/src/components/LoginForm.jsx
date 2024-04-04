import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import AppContext from "../context/AppContext";
import LoginContext from "../context/LoginContext";

import logo from "../assets/logo.png";

import "../styles/components/loginForm.css";
import { loginUser } from "../services/userService";

function LoginForm() {
  const { setToDisplay } = useContext(AppContext);
  const { loginInformations, setLoginInformations } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    setToDisplay(false);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleLoginInformations = ({ target: { name, value } }) => {
    setLoginInformations({
      ...loginInformations,
      [name]: value,
    });
  };

  const loginThenRedirect = () => {
    console.info(loginInformations);
    loginUser(loginInformations);
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
          onChange={(event) => handleLoginInformations(event)}
        />
        <label htmlFor="password">PASSWORD</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="********"
          onChange={(event) => handleLoginInformations(event)}
        />
        <button type="submit" onClick={loginThenRedirect}>
          Log in
        </button>
        <p>
          or <Link to="/">Create an account</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
