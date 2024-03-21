import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

import "../styles/components/loginForm.css";

function LoginForm() {
  return (
    <div className="login-form-container">
      <div>
        <img src={logo} alt="website logo" />
      </div>
      <form>
        <h1>Login</h1>
        <h4>Sign in to continue.</h4>
        <label htmlFor="email">EMAIL</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
        />
        <label htmlFor="password">PASSWORD</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="********"
        />
        <button type="submit">Log in</button>
        <p>
          or <Link to="/">Create an account</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
