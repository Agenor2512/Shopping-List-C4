import React from "react";
import { Link } from "react-router-dom";

import backward from "../assets/arrow_back.svg";

import "../styles/components/registerForm.css";

function RegisterForm() {
  return (
    <div className="register-form-container">
      <button type="button" className="backward">
        <img src={backward} alt="backward arrow" />
      </button>
      <form>
        <h1>Create new Account</h1>
        <label htmlFor="email">NAME</label>
        <input id="name" name="name" type="text" placeholder="John Doe" />
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
        <label htmlFor="verify-password">VERIFY PASSWORD</label>
        <input
          id="verify-password"
          name="verify-password"
          type="password"
          placeholder="********"
        />
        <button type="submit">Sign up</button>
        <p>
          Already have an account ? <Link to="/">Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default RegisterForm;
