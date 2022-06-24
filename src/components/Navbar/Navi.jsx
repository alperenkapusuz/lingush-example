import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../images/logo.png";
import "./Navi.css";

const Navi = () => {
  return (
    <div>
      <Navbar bg="navbar" variant="dark" fixed="top" expand="lg">
        <Navbar.Brand className="nav-img-p">
          <img className="lingush-logo" src={logo} alt="lingush-logo" />
          <p className="lingush-name">LINGUSH</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="collapse">
          <Nav>
            <NavDropdown
              title={`Site dili: Türkçe`}
              id="select-language-dropdown"
              className="select-language-dropdown"
            >
              <NavDropdown.Item href="#">Türkçe</NavDropdown.Item>
              <NavDropdown.Item href="#">English</NavDropdown.Item>
            </NavDropdown>
            <button class="login-button">GİRİŞ</button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
