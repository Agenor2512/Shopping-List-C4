import logo from "../assets/logo.png";

import "../styles/header.css";

function Header() {
  return (
    <div className="header-container">
      <div>
        <img src={logo} alt="website logo" />
      </div>
    </div>
  );
}
export default Header;
