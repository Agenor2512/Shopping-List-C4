/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import home from "../assets/home.svg";
import search from "../assets/search.svg";

import "../styles/components/footer.css";

function Footer() {
  return (
    <footer className="nav-container">
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
