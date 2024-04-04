import { useContext } from "react";
import { Link } from "react-router-dom";

import AppContext from "../context/AppContext";

import logo from "../assets/logo.png";

import "../styles/components/header.css";

function Header() {
  const { toDisplay } = useContext(AppContext);
  return (
    <div className={toDisplay ? "header-container" : "disable"}>
      <div>
        <img src={logo} alt="website logo" />
        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/search"> Search </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
