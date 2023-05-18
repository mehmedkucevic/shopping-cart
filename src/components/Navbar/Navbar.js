import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../src/assets/images/logo.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to={"/"} activeClassName="active-link">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <div className="links">
        <NavLink to={"/cart"} activeClassName="active-link">
          <h2>Cart</h2>
        </NavLink>
        <NavLink to={"/products"} activeClassName="active-link">
          <h2>Products</h2>
        </NavLink>
      </div>
    </header>
  );
}
