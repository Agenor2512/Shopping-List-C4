import "../styles/footer.css";

import home from "../assets/home.svg";
import search from "../assets/search.svg";

function Footer() {
  return (
    <div className="footer-container">
      <button type="button">
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
  );
}

export default Footer;
