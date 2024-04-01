/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";

import AppContext from "../context/AppContext";

import home from "../assets/home.svg";
import search from "../assets/search.svg";

import "../styles/components/footer.css";

function Footer() {
  const { toDisplay } = useContext(AppContext);

  return (
    <footer className={toDisplay ? "nav-container" : "disable"}>
      <div className="nav-mobile">
        <div className="navigation">
          <button type="button">
            <Link to="/">
              <img src={home} alt="home page button" />
            </Link>
          </button>
          <button type="button">
            <Link to="/search">
              <img src={search} alt="search page button" />
            </Link>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
