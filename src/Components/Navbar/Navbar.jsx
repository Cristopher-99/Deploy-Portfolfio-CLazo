import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../imgs/logo 211.png";
import { Navbar, Nav, NavDropdown, Container, NavLink } from "react-bootstrap";
import "./Navbar.css";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

const NavBar = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <Navbar expand="lg" className="navegador ">
      <Navbar.Brand>
        <Link to="/">
          <img src={logo} class="rounded-circle logo" alt="..." />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="m-3">
        <i class="bi bi-three-dots-vertical h1 text-light"></i>
      </Navbar.Toggle>

      <Navbar.Collapse id="responsive-navbar-nav ">
        <Nav className="mx-auto h2 ">
          <Link to="/" className="nav-link ">
            <span
              class={
                location.pathname === "/"
                  ? "nav-link route-flag route-hover text-white active"
                  : "nav-link route-hover text-white opcion"
              }
            >
              <i class="bi bi-house-door-fill"></i> Home
            </span>
          </Link>
          <Link to="/resume" className="nav-link ">
            <span
              class={
                location.pathname === "/resume"
                  ? "nav-link route-flag route-hover text-white active"
                  : "nav-link  route-hover text-white opcion"
              }
            >
              <i class="bi bi-file-person-fill"></i> Resume
            </span>
          </Link>

          <Link to="/projects" className="nav-link ">
            <span
              class={
                location.pathname === "/projects"
                  ? "nav-link  route-flag route-hover text-white active"
                  : "nav-link route-hover text-white opcion"
              }
            >
              <i class="bi bi-file-earmark-code-fill"></i> Projects
            </span>
          </Link>
          <Link to="/contact" className="nav-link ">
            <span
              class={
                location.pathname === "/contact"
                  ? "nav-link  route-flag route-hover text-white active"
                  : "nav-link  route-hover text-white opcion"
              }
            >
              <i class="bi bi-person-rolodex"></i> Contact
            </span>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
