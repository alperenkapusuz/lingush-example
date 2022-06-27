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
        <Navbar.Brand href="/" className="navbar-name">LINGUSH</Navbar.Brand>
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
          <Nav.Link href="/auth" >
            <button className="login-button">GİRİŞ</button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navi;
