import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
// import logo from "../../assets/images/logo.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <NavLink to={"/"}>
        <img
          src={require("../../assets/images/logo.png")}
          alt="logo"
          className="logo"
        />
      </NavLink>
      <div className="links">
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
        >
          <h2>PRODUCTS</h2>
        </NavLink>
        <NavLink
          to={"/cart"}
          className={({ isActive }) =>
            isActive ? "activeStyles" : "classicStyles"
          }
        >
          <h2>CART</h2>
        </NavLink>
      </div>
    </header>
  );
}