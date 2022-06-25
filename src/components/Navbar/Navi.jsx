// import React, { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "../../images/navbar/logo.png";
// import "./Navi.css";

// function Navi() {
//   const navRef = useRef();
//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive_nav");
//   };
//   return (
//     <header>
//       <div className="lingush-div-logo-name">
//         <img className="lingush-logo" src={logo} alt="lingush-logo" />
//         <h3 className="lingush-name">LINGUSH</h3>
//       </div>
//       <nav ref={navRef}>
//         <label className="label-language">Site Dili:</label>
//         <select name="language" id="language">
//           <option value="Turkce">Türkçe</option>
//           <option value="Ingilizce">Ingilizce</option>
//         </select>
//         <button className="login-button">GİRİŞ</button>
//         <button className="nav-btn nav-close-btn" onClick={showNavbar}>
//           <FaTimes />
//         </button>
//       </nav>
//       <button className="nav-btn" onClick={showNavbar}>
//         <FaBars />
//       </button>
//     </header>
//   );
// }

// export default Navi;

import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../images/navbar/logo.png";
import "./Navi.css";

const Navi = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      sticky="top"
      className="navbar-page"
    >
      <Container>
        <img src={logo} alt="lingush-logo" className="lingush-logo"/>
        <Navbar.Brand className="navbar-name">LINGUSH</Navbar.Brand>
        <Navbar.Toggle
          className="navbar-toggle"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <NavDropdown title="Site Dili" id="collasible-nav-dropdown">
              <NavDropdown.Item>Türkçe</NavDropdown.Item>
              <NavDropdown.Item>Ingilizce</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <button className="login-button">GİRİŞ</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navi;
