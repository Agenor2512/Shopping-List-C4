import { Link } from "react-router-dom";

import home from "../assets/home.svg";
import search from "../assets/search.svg";
import Add from "./Add";

import "../styles/components/footer.css";

function Footer() {
  return (
    <div className="nav-container">
      <div className="nav-mobile">
        <Add />
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
    </div>
  );
}

export default Footer;
