import React from "react";
import { Container, FormControl, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";
import style from "./NavBarLogIn.module.css";
import { Link } from "react-router-dom";
import NavbarSearchHook from "./../../hook/search/navbar-search-hook";

const NavBarLogIn = () => {
  const [onChangeSearch] = NavbarSearchHook();

  let word = "";
  if (sessionStorage.getItem("searchWord") !== null) {
    word = sessionStorage.getItem("searchWord");
  }

  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <Link to={"/"}>
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            //
            onChange={onChangeSearch}
            value={word}
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100"
            aria-label="Search"
          />
          <Nav className="me-auto">
            <Link to="/login" className={`${style["nav-text"]} nav-link d-flex mt-3 justify-content-center`}>
              <img src={login} className="login-img" alt="sfvs" />
              <p style={{ color: "white" }}>تسجيل</p>
            </Link>
            <Link to="/cart" className={`${style["nav-text"]} nav-link d-flex mt-3 justify-content-center`} style={{ color: "white" }}>
              <img src={cart} className="login-img" alt="sfvs" />
              <p style={{ color: "white" }}>العربه</p>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogIn;
