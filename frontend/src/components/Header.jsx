import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

import "../styles/header.css";
import UserInitial from "./UserInitial";

function Header() {
  return (
    <div className="header-container">
      <div>
        <img src={logo} alt="website logo" />
        <UserInitial />

        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/"> Search </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
