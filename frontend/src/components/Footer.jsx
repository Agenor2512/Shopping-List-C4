import "../styles/footer.css";

import home from "../assets/home.svg";
import search from "../assets/search.svg";

function Footer() {
  return (
    <div className="nav-container">
      <div className="nav-mobile">
        <button type="button" className="add">
          <p>+</p>
        </button>
        <div>
          <button type="button">
            <img src={home} alt="home page button" />
          </button>
          <button type="button">
            <img src={search} alt="search page button" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
