import React, { useState, useEffect } from "react";
import { Container, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";
import style from "./NavBarLogIn.module.css";
import { Link, useNavigate } from "react-router-dom";
import NavbarSearchHook from "./../../hook/search/navbar-search-hook";

const NavBarLogIn = () => {
  const [onChangeSearch] = NavbarSearchHook();
  const [user, setUser] = useState("");

  const nav = useNavigate();

  let word = "";
  if (sessionStorage.getItem("searchWord") !== null) {
    word = sessionStorage.getItem("searchWord");
  }

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
    nav("/");
  };

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
            {user !== "" ? (
              <NavDropdown className="d-flex justify-content-center align-items-center" title={user.name} id="basic-nav-dropdown">
                <NavDropdown.Item>
                  {user.role === "admin" ? (
                    <Link style={{ textDecoration: "none", color: "white" }} to={"/admin/allproducts"}>
                      لوحة التحكم
                    </Link>
                  ) : (
                    <Link style={{ textDecoration: "none", color: "white" }} to={"/user/profile"}>
                      الصفحة الشخصية
                    </Link>
                  )}
                </NavDropdown.Item>
                <NavDropdown.Divider style={{ color: "white" }} />
                <NavDropdown.Item onClick={logOut}>تسجيل خروج</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Link to="/login" className={`${style["nav-text"]} nav-link d-flex mt-3 justify-content-center`}>
                <img src={login} className="login-img" alt="sfvs" />
                <p style={{ color: "white" }}>تسجيل</p>
              </Link>
            )}

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
