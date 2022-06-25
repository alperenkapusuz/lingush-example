import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavDropdown } from "react-bootstrap";
import logo from "../../images/navbar/logo.png";
import "./Navi.css";

function Navi() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <div className="lingush-div-logo-name">
        <img className="lingush-logo" src={logo} alt="lingush-logo" />
        <h3 className="lingush-name">LINGUSH</h3>
      </div>
      <nav ref={navRef}>
        <label className="label-language">Site Dili:</label>
        <select name="language" id="language">
          <option value="Turkce">Türkçe</option>
          <option value="Ingilizce">Ingilizce</option>
        </select>
        <button className="login-button">GİRİŞ</button>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navi;
